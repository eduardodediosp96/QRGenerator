import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';

const CustomInput = ({
  style = { boxShadow: '0 0 10px orange' },
  name = 'CustomInput',
  onUpdateTime = () => null,
}: {
  style?: Record<string, string>;
  name?: string;
  onUpdateTime: (time: string) => void;
}) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    const key = event.key;
    const keyAsInt = parseInt(key);
    if (!isNaN(keyAsInt) && keyAsInt >= 0 && keyAsInt <= 9) {
      if (hours === '') {
        setHours(key);
      } else if (hours.length === 1 && minutes === '') {
        setHours(hours + key);
      } else if (minutes === '') {
        setMinutes(key);
      } else if (minutes.length === 1) {
        setMinutes(minutes + key);
      }
    } else if (key === 'Backspace') {
      setHours('');
      setMinutes('');
    }

    if (hours !== '' && parseInt(hours) > 23) {
      setHours('23');
    }

    if (minutes !== '' && parseInt(minutes) > 59) {
      setMinutes('59');
    }
  };

  const updateTime = () => {
    const time =
      (hours.padStart(2, '0') || '00') +
      ':' +
      (minutes.padStart(2, '0') || '00');

    onUpdateTime(time);
    return time;
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="HH:mm"
      style={style}
      name={name}
      className="pds-input js-hours hours-input"
      value={updateTime()}
      readOnly
      onKeyDown={handleKeyDown}
    />
  );
};

export default CustomInput;
