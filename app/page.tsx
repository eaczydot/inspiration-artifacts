import Link from 'next/link';
import {ArrowUpRight,BookOpen,CalendarDays,Grid3X3,Table2} from 'lucide-react';
import styles from './page.module.css';
const sources=[
 {slug:'monaco',index:'01',name:'Monaco',kind:'Revenue engine',description:'One united CRM prototype across TAM, signals, sequences, meetings, pipeline, and Ask AI.',Icon:Table2,tone:'sage'},
 {slug:'shadcncraft',index:'02',name:'shadcncraft',kind:'Sales system',description:'Pipeline, account signals, conversion charts, heatmaps and draggable deals.',Icon:Grid3X3,tone:'sand'},
 {slug:'brutalist-icons',index:'03',name:'Brutalist icons',kind:'Material study',description:'Swappable Lucide primitives treated as one-bit Xerox and cut concrete.',Icon:ArrowUpRight,tone:'paper'},
 {slug:'opensourceui',index:'04',name:'OpenSourceUI',kind:'Calendar + CRM map',description:'Territory planning, week availability and an account booking flow.',Icon:CalendarDays,tone:'rust'},
];
export default function Home(){return <main className={styles.page}><header><div><span className={styles.eyebrow}>INSPIRATION / INDEX</span><h1>Source material,<br/>made operational.</h1></div><div className={styles.intro}><p>Interface studies translated into adaptable components and Storybook stories. Library primitives first. Bespoke only where the source demands it.</p><Link href="/storybook"><BookOpen size={15}/>Open Storybook</Link></div></header><section className={styles.grid}>{sources.map(({slug,index,name,kind,description,Icon,tone})=><Link href={`/inspirations/${slug}`} className={`${styles.card} ${styles[tone]}`} key={slug}><div className={styles.cardTop}><span>{index}</span><Icon/></div><div><small>{kind}</small><h2>{name}</h2><p>{description}</p></div><span className={styles.enter}>Enter source <ArrowUpRight size={15}/></span></Link>)}</section><footer><span>VERCEL / NEXT.JS</span><span>STORYBOOK 10</span><span>4 SOURCES / 4 ENTRIES</span></footer></main>}
