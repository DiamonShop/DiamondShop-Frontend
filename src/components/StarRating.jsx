import React from 'react';

const StarRating = ({ rating, setRating }) => {
    const handleStarClick = (value) => {
        setRating(value);
    };

    return (
        <div className="star-rating">
            <h6 className="option-title">Đánh giá:</h6>
            {[1, 2, 3, 4, 5].map((value) => (
                <span key={value} onClick={() => handleStarClick(value)}>
                    <i className={`fa ${value <= rating ? 'fa-star' : 'fa-star-o'}`} />
                </span>
            ))}
            <div>
                {rating === 1 ? 'Tệ' : rating === 2 ? 'Kém' : rating === 3 ? 'Trung bình' : rating === 4 ? 'Tốt' : rating === 5 ? 'Xuất sắc' : ''}
            </div>
        </div>
    );
};

export default StarRating;
