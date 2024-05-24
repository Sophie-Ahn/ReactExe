import styles from './CSSModule.module.css';
import classnames from 'classnames/bind';

// classnames 모듈을 사용해서, styles의 css를 받아서 저장하도록 한다.
const cx = classnames.bind(styles);

const CSSModule = () => {
	return (
		<div className={cx('wrapper', "inverted")}>
			굉장해!! <span className='something'>엄청나잖아??!!!!</span>
		</div>
	)
}

export default CSSModule;