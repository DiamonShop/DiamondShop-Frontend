import React from 'react';


const StarRating = ({ rating, setRating, isEditable = true }) => {
    const handleStarClick = (value) => {
        if (isEditable) {
            setRating(value);
        }
    };

    const getStarClass = (index) => {
        if (rating >= index) {
            return 'fa fa-star full-star';
        } else if (rating >= index - 0.5) {
            return 'fa fa-star half-star';
        } else {
            return 'fa fa-star empty-star';
        }
    };

    return (
        <div className="star-rating">
             
            {[1, 2, 3, 4, 5].map((value) => (
                <span key={value} onClick={() => handleStarClick(value)}>
                    <i className={getStarClass(value)} />
                </span>
            ))}
            
            <div>
                {rating === 1 ? 'Tệ' : rating === 2 ? 'Kém' : rating === 3 ? 'Trung bình' : rating === 4 ? 'Tốt' : rating === 5 ? 'Xuất sắc' : ''}
            </div>
        </div>
    );
};

export default StarRating;
