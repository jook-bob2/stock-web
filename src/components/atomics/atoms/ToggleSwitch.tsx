import * as style from './toggleSwitch.css';

interface Props {
  children: React.ReactNode;
  isChecked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export default function ToggleSwitch({ children, onClick, isChecked }: Props) {
  return (
    <div className={style.toggleContainer}>
      <button
        className={`${style.toggleSwitch} ${isChecked ? style.toggleChecked : ''}`}
        onClick={onClick}>
        <div className={`${style.toggleSlider} ${isChecked ? style.sliderChecked : ''}`}>{children}</div>
      </button>
    </div>
  );
}
