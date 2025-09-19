import { useState } from 'react';

export function CommandList({
  initialCommandItems,
}: {
  initialCommandItems: { text: string }[];
}) {
  const [commandItems, setCommandItems] = useState(initialCommandItems);
  const [newCommand, setNewCommand] = useState('');
  return (
    <>
      <ul>
        {commandItems.map((commandItem, index) => (
          // biome-ignore lint: example
          <li key={index}>{commandItem.text}</li>
        ))}
      </ul>
      <div>
        <form
          onSubmit={async ev => {
            ev.preventDefault();

            // Optimistic UI update
            setCommandItems(prev => [...prev, { text: newCommand }]);
          }}
        >
          <input
            type="text"
            onChange={ev => setNewCommand(ev.target.value)}
            value={newCommand}
          />
          <button type="submit">Send command</button>
        </form>
      </div>
    </>
  );
}
