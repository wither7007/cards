copy(
  $$("p").reduce((a, i) => {
    a.push(i.textContent)
    return a
  }, [])
)
const add = (x,y) => {
    console.log(x+y);
}
a=$$('*')
for (const i in a) {
    console.log(a);
    
}