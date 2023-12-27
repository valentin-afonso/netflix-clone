import Close from '@/app/ui/svg/close'

export default function Sidebar() {
  return (
    <div className="hidden fixed h-full right-0 px-10 pt-10 bg-header z-10">
        <ul>
            <li className='flex justify-end pb-1'>
                <Close />
            </li>
            <li>
                <p>valentin-afonso</p>
            </li>
            <li>
                <p>valentinafonso22@gmail.com</p>
            </li>
            <li>
                <p className='text-xs'>clpe6wf1z00001433bq21glg3</p>
            </li>
            <li>
                logout
            </li>
        </ul>
    </div>
  )
}
