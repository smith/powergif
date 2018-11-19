import React, { StatelessComponent, FormEvent, useState } from "react";

export interface Props {
  onSubmit: (value: string) => void;
}

export const Search: StatelessComponent<Props> = props => {
  const [value, setValue] = useState("");

  const handleChange = (event: FormEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(value);
  };

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        autoFocus
        placeholder="Find a GIF…"
        type="search"
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};
