import{MonacoCRM,MonacoView}from'../../../../src/inspirations/monaco/pages/MonacoCRM';
export default function Page({params}:{params:{section:string}}){return <MonacoCRM initialView={params.section as MonacoView}/>}
