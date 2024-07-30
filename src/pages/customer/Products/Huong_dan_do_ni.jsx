import React from 'react';
import { useTranslation } from 'react-i18next';

function Huong_dan_do_ni() {
    const { t } = useTranslation();
    return (
        <div class="container-do-ni">
            <h1 class="do-ni-title">{t("ringSizeInstructions")}</h1>
            <ul class="instructions">
                <li>{t("ringSizeInstructions1")}</li>
                <li>{t("ringSizeInstructions2")}</li>
                <li>{t("ringSizeInstructions3")}</li>
                <li>{t("ringSizeInstructions4")}</li>
            </ul>
            <div class="images-do-ni">
                <div class="image-do-ni">
                    <img src="assets/img/Huong-dan-do-ni/cach-do-ni-size.png" alt="Hướng dẫn đo ni" />
                </div>
            </div>
            <div class="note">
                <p>{t("guarantee9")}</p>
                <ul>
                    <li>{t("note1")}</li>
                    <li>{("note2")}</li>
                    <li>{t("note3")}</li>
                    <li>{t("note4")}</li>
                    <li>{t("note5")}</li>
                </ul>
            </div>
            <div class="images">
                <h1 class="quy-chieu-size-title">{t("ringSizeChart")}</h1>
                <div class="image">
                    <img src="assets/img/Huong-dan-do-ni/Bang-quy-chieu.jpg" alt="Size-ni-nhẫn" />
                </div>
            </div>

        </div>
    );
}

export default Huong_dan_do_ni;
