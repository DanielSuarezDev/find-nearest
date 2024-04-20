import { useNavigate } from 'react-router-dom'

export const Goback = () => {
  const navigate = useNavigate()
  return (
    <div
      className='cursor-pointer text-red-950 font-bold p-2'
      onClick={() => navigate(-1)}
    >{'<'} Volver</div>
  )
}
