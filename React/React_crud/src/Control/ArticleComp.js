import React from 'react'

export default function ArticleComp({article}) {
  return (
    <div>
      <p>
        {article.code}
        {article.nom}
        {article.category}
        {article.prix}
      </p>
    </div>
  )
}
