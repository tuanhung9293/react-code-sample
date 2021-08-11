import { useAppDispatch, useAppSelector } from "../../hooks/root";
import { setTheme } from "../../redux/uiSlice";

export const Settings = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(state => state.ui);

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.currentTarget.value as TTheme));
  }

  return (
    <div>
      <select value={theme} onChange={handleChange} className='h-8 border border-skin-base mb-4'>
        <option value="theme-default">theme default</option>
        <option value="theme-red">theme red</option>
        <option value="theme-yellow">theme yellow</option>
      </select>
    </div>
  );
}
