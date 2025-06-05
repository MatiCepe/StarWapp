"use client"
import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { GenericCard } from './GenericCard';
import ToastUtils from '@/app/utils/ToastUtils';

interface GenericListProps<T> {
  fetchItems: () => Promise<T[]>;
  renderItem: (item: T) => React.ReactNode;
  getFilterField: (item: T) => string;
  title?: string;
  description?: string;
}

export default function GenericList<T>({
  fetchItems,
  renderItem,
  getFilterField,
  title = 'Explore Items',
  description = 'Browse the list of items below.',
}: GenericListProps<T>) {
  const [items, setItems] = useState<T[]>([]);
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchItems()
    .then((data) => {
      setItems(data);
      setFilteredItems(data);
    })
    .catch((error) => {
      console.error('Error fetching items:', error);
      ToastUtils.error('Failed to load items. Please try again later.');
    });
  }, []);

  useEffect(() => {
    if (query.length >= 3) {
      const newFiltered = items.filter((item) =>
        getFilterField(item).toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(newFiltered);
      if (newFiltered.length === 0) {
        ToastUtils.warning('No items found matching your search criteria.');
      }
    } else {
      setFilteredItems(items);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    filteredItems.length === 0 && query.length >= 3 && ToastUtils.warning('No items found matching your search criteria.');
  }, [query, items]);

  return (
    <div className="min-h-screen bg-sand dark:bg-gray-950 text-gray-900 dark:text-white p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start max-w-6xl mx-auto">
        <h1 className="font-bold text-lg sm:text-2xl font-[family-name:var(--font-geist-mono)]">
          {title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          {description}
        </p>
        <SearchBar onSearch={setQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {filteredItems.map((item, index) => (
            <GenericCard key={index} item={item} renderDetails={renderItem} />
          ))}
        </div>
      </main>
    </div>
  );
}