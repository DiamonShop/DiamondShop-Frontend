import jQuery from 'jquery';

(function ($) {
    $.fn.niceSelect = function (method) {
      function createNiceSelect($select) {
        $select.after($("<div></div>")
          .addClass("nice-select")
          .addClass($select.attr("class") || "")
          .addClass($select.attr("disabled") ? "disabled" : "")
          .attr("tabindex", $select.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>'));
        
        var $dropdown = $select.next();
        var $options = $select.find("option");
        var $selected = $select.find("option:selected");
  
        $dropdown.find(".current").html($selected.data("display") || $selected.text());
        $options.each(function () {
          var $option = $(this);
          var display = $option.data("display");
          $dropdown.find("ul").append($("<li></li>")
            .attr("data-value", $option.val())
            .attr("data-display", display || null)
            .addClass("option" + ($option.is(":selected") ? " selected" : "") + ($option.is(":disabled") ? " disabled" : ""))
            .html($option.text()));
        });
      }
  
      if (typeof method === 'string') {
        if (method === 'update') {
          return this.each(function () {
            var $select = $(this);
            var $dropdown = $select.next(".nice-select");
            var open = $dropdown.hasClass("open");
  
            if ($dropdown.length) {
              $dropdown.remove();
              createNiceSelect($select);
              if (open) {
                $select.next().trigger("click");
              }
            }
          });
        } else if (method === 'destroy') {
          this.each(function () {
            var $select = $(this);
            var $dropdown = $select.next(".nice-select");
  
            if ($dropdown.length) {
              $dropdown.remove();
              $select.css("display", "");
            }
          });
          if ($(".nice-select").length === 0) {
            $(document).off(".nice_select");
          }
          return this;
        } else {
          console.log('Method "' + method + '" does not exist.');
        }
        return this;
      }
  
      this.hide();
      this.each(function () {
        var $select = $(this);
        if (!$select.next().hasClass("nice-select")) {
          createNiceSelect($select);
        }
      });
  
      $(document).off(".nice_select");
  
      $(document).on("click.nice_select", ".nice-select", function () {
        var $dropdown = $(this);
        $(".nice-select").not($dropdown).removeClass("open");
        $dropdown.toggleClass("open");
  
        if ($dropdown.hasClass("open")) {
          $dropdown.find(".option");
          $dropdown.find(".focus").removeClass("focus");
          $dropdown.find(".selected").addClass("focus");
        } else {
          $dropdown.focus();
        }
      });
  
      $(document).on("click.nice_select", function (event) {
        if ($(event.target).closest(".nice-select").length === 0) {
          $(".nice-select").removeClass("open").find(".option");
        }
      });
  
      $(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function () {
        var $option = $(this);
        var $dropdown = $option.closest(".nice-select");
  
        $dropdown.find(".selected").removeClass("selected");
        $option.addClass("selected");
  
        var display = $option.data("display") || $option.text();
        $dropdown.find(".current").text(display);
        $dropdown.prev("select").val($option.data("value")).trigger("change");
      });
  
      $(document).on("keydown.nice_select", ".nice-select", function (event) {
        var $dropdown = $(this);
        var $focusedOption = $($dropdown.find(".focus") || $dropdown.find(".list .option.selected"));
  
        if (event.keyCode === 32 || event.keyCode === 13) {
          if ($dropdown.hasClass("open")) {
            $focusedOption.trigger("click");
          } else {
            $dropdown.trigger("click");
          }
          return false;
        } else if (event.keyCode === 40) {
          if ($dropdown.hasClass("open")) {
            var $nextOption = $focusedOption.nextAll(".option:not(.disabled)").first();
            if ($nextOption.length > 0) {
              $dropdown.find(".focus").removeClass("focus");
              $nextOption.addClass("focus");
            }
          } else {
            $dropdown.trigger("click");
          }
          return false;
        } else if (event.keyCode === 38) {
          if ($dropdown.hasClass("open")) {
            var $prevOption = $focusedOption.prevAll(".option:not(.disabled)").first();
            if ($prevOption.length > 0) {
              $dropdown.find(".focus").removeClass("focus");
              $prevOption.addClass("focus");
            }
          } else {
            $dropdown.trigger("click");
          }
          return false;
        } else if (event.keyCode === 27) {
          if ($dropdown.hasClass("open")) {
            $dropdown.trigger("click");
          }
        } else if (event.keyCode === 9 && $dropdown.hasClass("open")) {
          return false;
        }
      });
  
      var style = document.createElement("a").style;
      style.cssText = "pointer-events:auto";
      if (style.pointerEvents !== "auto") {
        $("html").addClass("no-csspointerevents");
      }
  
      return this;
    };
  })(jQuery);
  