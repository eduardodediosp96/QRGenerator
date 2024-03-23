import CustomTimeInput from '@components/CustomTimeInput';
import ReactDOM from 'react-dom';

const hasDesiredAttributes = (target: HTMLInputElement) => {
  return (
    target.tagName === 'INPUT' &&
    target.type === 'text' &&
    target.name === 'hours' &&
    target.classList.contains('pds-input') &&
    target.classList.contains('js-hours') &&
    target.classList.contains('hours-input') &&
    target.getAttribute('aria-label') === 'hours'
  );
};

function handleFocus(event: Event) {
  const target = event.target as HTMLInputElement;
  if (hasDesiredAttributes(target)) {
    // Crear un nuevo contenedor
    const container = document.createElement('div');

    const onUpdateTime = (time: string) => {
      // Actualizar el valor del input original
      target.value = time;
      target.dispatchEvent(new Event('input', { bubbles: true }));
    };

    if (target.parentNode) {
      // Insertar el contenedor antes del input existente
      target.parentNode.insertBefore(container, target);
    }

    // Renderizar el CustomInput dentro del contenedor
    ReactDOM.render(
      <CustomTimeInput onUpdateTime={onUpdateTime} name={target.name} />,
      container,
    );

    // Ocultar el input existente
    target.style.display = 'none';
  }
}

document.addEventListener('focus', handleFocus, true);
