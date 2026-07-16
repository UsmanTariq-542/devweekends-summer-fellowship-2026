# React basics — notes

## Concepts covered
- Functional components + props (App → ControlButton, ActionLog)
- useState for local state (count, step, log)
- useEffect with dependency array + cleanup (updates document title on count change)
- Conditional rendering (empty log state, positive/negative count color, clear button)
- List rendering with unique keys (action.id via crypto.randomUUID(), not index)

## Key learnings
- Functional state updates (`setCount(prev => prev + 1)`) vs direct value (`setCount(count + 1)`)
  — functional form needed only when new state depends on rapid/multiple updates in the same handler
- React StrictMode double-invokes state updater functions in dev mode — side effects
  (like logging) should never live inside a setState updater, only pure calculations should
- Controlled components — <select> value tied to state, updated via onChange

## Project
- Counter with adjustable step size (1/5/10)
- Action log with timestamps, clearable
- Conditional styling based on count value (green/red)