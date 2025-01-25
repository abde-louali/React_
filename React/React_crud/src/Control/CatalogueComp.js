import React from 'react'
import ArticleComp from './ArticleComp';
export default function CatalogueComp({List,vall,clicked}) {
    let newlist;
    vall&&clicked ? newlist=List.filter(art=>art.category = vall) :newlist = List
  return (
    <div>
      {
      
        newlist.map((art)=>{
            return <ArticleComp  article={art} key={art.code}/>
        }) 
      }
    </div>
  )
}
