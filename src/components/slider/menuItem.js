import { useState } from 'react';
import './menuItem.scss';

const MenuItem = ({ isActive, onMenuClick, slide }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={isActive ? 'menuItem menuItem--selected' : 'menuItem'}>
            <button
                type="button"
                onClick={onMenuClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {slide.image.alt}
            </button>

            {isHovered === true ? (
                <div className="menuItem__thumbnail">
                    <h5 dangerouslySetInnerHTML={{ __html: slide.client }}></h5>
                    <img
                        className="menuItem__img"
                        src={`images/${slide.image.name}`}
                        alt={slide.image.alt}
                        title={slide.image.alt}
                        height={100}
                    />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default MenuItem;
