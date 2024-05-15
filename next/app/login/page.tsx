import { handleLogin } from "../actions";

export default async function Page() {
  return (
    <main>
      <form action={handleLogin}>
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
