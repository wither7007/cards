$$(".content-mainTxt h2").reduce((a, i) => {
  if (i.textContent.match(/M/)) {
    a.push(i.textContent)
  }
  return a
}, [])

q=$$(".content-mainTxt h2").reduce((a, i) => {
  if (i.textContent.match(/^\d/)) {
    n=i.textContent.replace(/\d+\.\s/,'')
    a.push(n)
  }
  return a
}, [])


q.forEach(l=>console.log(l.split('-').map(j=>j.trim())))

.forEach(g=>console.log(g.replace(/\d+\.\s/,'')))


q.reduce((a,i)=>{
    a['city']=i;
    return a
},{})

r=q.reduce((a,i)=>{
    // j=i.split('-')[0].trim()
    a.push({word: i.split('-')[0].trim(), define: i.split('-')[1].trim()})
    return a
},[])
copy(r)
r=q.reduce((a,i)=>{
    j=i.split('-')[0].trim()
    a+={city: i, population: i}
    a[j]=[]
    a[j].push({population:i.split('-')[1].trim()})

    return a
},{})