import { useState } from 'react';
/**5. 6. Создайте функцию updateColor, которая принимает новый цвет и обновляет состояние color.
Внутри JSX компонента App, добавьте стили для вертикального и горизонтального выравнивания
содержимого и установите фон, используя текущее состояние color.
7. 8. 9. Импортируйте компонент Form и передайте ему функцию updateColor через пропсы.
Создайте новый файл Form.jsx в той же директории.
Импортируйте useState так же, как и в App.js.
10. Создайте функциональный компонент Form. */
function Form({ updateColor }) {
  const [newColor, setNewColor] = useState('#000000');
  function handleChange(event) {
    setNewColor(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    updateColor(newColor);
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input
        type="color"
        style={{
          height: '100px',
          width: '100px',
        }}
        value={newColor}
        onChange={handleChange}
      />
      <button type="submit">Change!</button>
    </form>
  );
}
export default Form;
