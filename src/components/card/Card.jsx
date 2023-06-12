import Icon from '../icon/Icon';
import style from './card.module.css';
const Card = ({ title, text, icon, alt, color }) => {
	return (
		<div className={`${style.card} ${style[color]}`}>
			<h2>{title}</h2>
			<p>{text}</p>
			<Icon className={style.icon} src={icon} alt={alt} />
		</div>
	);
};

export default Card;
