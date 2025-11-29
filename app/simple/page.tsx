import { JSX } from "react"

function Greeting1(): JSX.Element {
  return <h1>Hello!</h1>
}

export default function SimplePage() {
  const test = 0

  function Greeting(): number {
    const test = 2
    return test
  }

  function Calculate(number1: number, number2: number):number {
    const sum = number1 + number2
    return sum
  }

  function Calculate1(list1: number[]):number {
    let list1_sum = 0
    const list1_len = list1.length
    for (let i = 0; i < list1.length; i++) {
      list1_sum += list1[i]
    }
    return list1_sum
  }

  function Calculate2(list1: number[]):number {
    let list1_sum = 0
    for (let num of list1) { // not "in" which is used to iterate across objects
      list1_sum += num
    }
    return list1_sum
  }


  function Calculate3(list1: number[]): number {
    return list1.reduce((sum, num) => sum + num, 0)
  }
  return (
    <div className="">

        <a href="/">HOME</a>

      <Greeting/>
      <p> 
        {Calculate(1,2)}
        {Calculate1([1,2,3])}
        {Calculate2([1,2,3])}
        {Calculate3([1,2,3])}
      </p>

      <Greeting1/>
    </div>
  );
}
