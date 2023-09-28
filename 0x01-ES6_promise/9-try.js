export default function guardrail(mathFunction) {
  const queue = [null, 'Guardrail was processed'];
  try {
    queue[0] = mathFunction();
  } catch (e) {
    queue[0] = `Error: ${e.message}`;
  }
  return queue;
}
