import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar({ onSearch }) {

    const [input, setInput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        onSearch?.(value);
      };
      return (
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Find..."
            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-950 dark:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      );
}