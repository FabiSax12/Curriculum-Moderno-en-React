import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-regular-svg-icons"

export const Academic = ({ lugar, fecha, titulo, area }) => {
  return (
    <div className="grid grid-cols-[1fr_1rem_1fr] gap-2 leading-6">
      <h3 className="pb-7 text-base text-end text-back font-bold">
        {lugar}
        <p className="text-[0.8rem] text-third font-normal">{fecha}</p>
      </h3>
      <div className="flex flex-col items-center justify-center text-center text-sm text-primary">
        <FontAwesomeIcon icon={faCircle} className="my-1 mx-auto relative" />
        <div className="w-[.125rem] h-full my-0 mx-auto bg-third"></div>
      </div>
      <div>
        <h4 className="font-bold">{titulo}</h4>
        <p className="text-sm">{area}</p>
      </div>
    </div>
  )
}
