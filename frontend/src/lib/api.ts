export async function fetchTestModels() {
  const res = await fetch("http://localhost:8000/api/test_model/");
  if (!res.ok) throw new Error("Failed to fetch subjects");
  return res.json();
}
