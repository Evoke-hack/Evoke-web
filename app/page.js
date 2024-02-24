import Sidebar from '../components/sidebar'

const style = {
  wrapper: `flex jsutify-center h-screen w-scren select-none bg-[#15202b]`,
  content: `max-w-[1400px] w-2/3 flex justify-between`
}


export default function Home() {
  return (
    <div className={style.wrapper}>
        <div className={style.content}>
        <Sidebar></Sidebar>
        <h2>Feed</h2>
        <h2>Widgets</h2>
      </div>
    </div>
      
      );
}
