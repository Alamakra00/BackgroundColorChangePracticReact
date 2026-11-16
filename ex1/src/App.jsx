import { useState } from 'react';
import Form from './Form';
/* 
Создание простого приложения на React для изменения цвета фона:
1. 3. 4. Инициализируйте новый проект React с помощью Create React App, подготовьте его к работе.
2. Откройте файл App.js.
Импортируйте хук useState из библиотеки React.
В компоненте, используйте useState для создания состояния color, которое будет хранить текущий цвет
фона.
5. 6. Создайте функцию updateColor, которая принимает новый цвет и обновляет состояние color.
Внутри JSX компонента App, добавьте стили для вертикального и горизонтального выравнивания
содержимого и установите фон, используя текущее состояние color.
7. 8. 9. Импортируйте компонент Form и передайте ему функцию updateColor через пропсы.
Создайте новый файл Form.jsx в той же директории.
Импортируйте useState так же, как и в App.js.
10. Создайте функциональный компонент Form.
*/
function App() {
  const [color, setColor] = useState('');

  function updateColor(newColor) {
    setColor(newColor);
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: color,
      }}
    >
      <Form updateColor={updateColor} />
    </div>
  );
}

export default App;
