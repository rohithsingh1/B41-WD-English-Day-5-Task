// Print odd numbers in the array
var arr
var n
(function(){
    let arr = [1,3,6,7,9,4,13,19]
    let n = arr.length
    let temp = new Array()
    for(let i=0;i<n;i++){
        if(arr[i]%2===1){
            temp.push(arr[i])
        }
    }
    console.log(temp)
})()

let OddNum = function(arr,n){
    let temp = new Array()
    for(let i=0;i<n;i++){
        if(arr[i]%2===1){
            temp.push(arr[i])
        }
    }
    return temp
}
arr = [1,3,6,7,9,4,13,19]
n = arr.length
console.log(OddNum(arr,n));


// Convert all the strings to title caps in a string array


(function(){
    let str_arr = ['hi','iam','rohithsingh']
    let n = str_arr.length
    for(let i=0;i<n;i++){
        let str = str_arr[i].split('')
        let str1 = '' + str[0].toUpperCase() + str.slice(1).join('')
        str_arr[i] = str1
    }
    console.log(str_arr)
})()


let fun1 = function(str_arr,n){
    for(let i=0;i<n;i++){
        let str = str_arr[i].split('')
        let str1 = '' + str[0].toUpperCase() + str.slice(1).join('')
        str_arr[i] = str1
    }
    return str_arr
}
let str_arr = ['hi','iam','rohithsingh']
n = str_arr.length
console.log(fun1(str_arr,n));

// Sum of all numbers in the array

(function(){
    let arr = [1,3,6,7,9,4,13,19]
    let n = arr.length
    let sum = 0
    for(let i=0;i<n;i++){
        sum = sum + arr[i]
    }
    console.log(sum)
})()

let Sum = function(arr,n){
    let sum = 0
    for(let i=0;i<n;i++){
        sum = sum + arr[i]
    }
    return sum
}
arr = [1,3,6,7,9,4,13,19]
n = arr.length
console.log(Sum(arr,n));


// Return all the prime numbers in the array

(function(){
    let Isprime = function(n){
        let n1 = Math.ceil(Math.sqrt(n))
        if(n===1){
            return false
        }
        if(n===2 || n===3){
            return true
        }
        if((n%2===0)||(n%3===0)){
            return false
        }
        let i = 5
        while(i<=n1){
            if(n%i === 0){
                return false
            }
            i = i + 2
            if(n%i === 0){
                return false
            }
            i = i + 4
        }
        if(n>=5){
            return true
        }
    }
    
    let arr = [1,2,3,4,5,6,7,13,23,35,39,43]
    let n = arr.length
    let temp = []
    for(let i=0;i<n;i++){
        res = Isprime(arr[i])
        if(res){
            temp.push(arr[i])
        }
    }
    console.log(temp.join(' '))
})()

let Isprime = function(n){
    let n1 = Math.ceil(Math.sqrt(n))
    if(n===1){
        return false
    }
    if(n===2 || n===3){
        return true
    }
    if((n%2===0)||(n%3===0)){
        return false
    }
    let i = 5
    while(i<=n1){
        if(n%i === 0){
            return false
        }
        i = i + 2
        if(n%i === 0){
            return false
        }
        i = i + 4
    }
    if(n>=5){
        return true
    }
}

var arr = [1,2,3,4,5,6,7,13,23,35,39,43]
var n = arr.length
var temp = []
for(let i=0;i<n;i++){
    res = Isprime(arr[i])
    if(res){
        temp.push(arr[i])
    }
}
console.log(temp.join(' '));


// Return all palindromes in an array

(function(){
    let IsPalindrome = function(arr,n){
        let l = 0
        let r = n-1
        while(l<r){
            if(arr[l]!==arr[r]){
                return false
            }
            l++
            r--
        }
        return true
    }
    let arr = ['abcba','abc','abcdcba','madam']
    let n = arr.length
    let temp = []
    for(let i=0;i<n;i++){
        let res = IsPalindrome(arr[i],arr[i].length)
        if(res){
            temp.push(arr[i])
        }
    }
    console.log(temp)
})()

let IsPalindrome = function(arr,n){
    let l = 0
    let r = n-1
    while(l<r){
        if(arr[l]!==arr[r]){
            return false
        }
        l++
        r--
    }
    return true
}
var arr = ['abcba','abc','abcdcba','madam']
var n = arr.length
var temp = []
for(let i=0;i<n;i++){
    let res = IsPalindrome(arr[i],arr[i].length)
    if(res){
        temp.push(arr[i])
    }
}
console.log(temp);

// Return median of two sorted arrays


(function(){
    let getMedian = function(ar1, ar2, n, m)
{
	let i = 0;
	let j = 0;
	let count;
	let m1 = -1, m2 = -1;
	if ((m + n) % 2 == 1)
	{
		for(count = 0;count <= (n + m) / 2;count++)
		{
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			else
			{
				m1 = ar2[j++];
			}
		}
		return m1;
	}
	else
	{
		for(count = 0;count <= (n + m) / 2;count++)
		{
			m2 = m1;
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			else
			{
				m1 = ar2[j++];
			}
		}
		return (m1 + m2) / 2;
	}
}
	
let ar1 = [900];
let ar2 = [5, 8, 10, 20];
let n1 = ar1.length;
let n2 = ar2.length;
console.log(getMedian(ar1,ar2,n1,n2))
})()

let getMedian = function(ar1, ar2, n, m)
{
	let i = 0;
	let j = 0;
	let count;
	let m1 = -1, m2 = -1;
	if ((m + n) % 2 == 1)
	{
		for(count = 0;count <= (n + m) / 2;count++)
		{
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			else
			{
				m1 = ar2[j++];
			}
		}
		return m1;
	}
	else
	{
		for(count = 0;count <= (n + m) / 2;count++)
		{
			m2 = m1;
			if (i != n && j != m)
			{
				m1 = (ar1[i] > ar2[j]) ? ar2[j++] : ar1[i++];
			}
			else if(i < n)
			{
				m1 = ar1[i++];
			}
			else
			{
				m1 = ar2[j++];
			}
		}
		return (m1 + m2) / 2;
	}
}
	
var ar1 = [900];
var ar2 = [5, 8, 10, 20];
var n1 = ar1.length;
var n2 = ar2.length;
console.log(getMedian(ar1,ar2,n1,n2));


// Remove duplicates from the array


(function(){
    let RemoveDuplicates = function(arr,n){
        let map = new Map()
        for(let i=0;i<n;i++){
            if(map.has(arr[i])){
                map.set(arr[i],map.get(arr[i])+1)
            }else{
                map.set(arr[i],1)
            }
        }
        return Array.from(map.keys())
    }
    let arr = [10,20,20,30,30,30,40]
    let n = arr.length
    console.log(RemoveDuplicates(arr,n))
})()

let RemoveDuplicates = function(arr,n){
    let map = new Map()
    for(let i=0;i<n;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1)
        }else{
            map.set(arr[i],1)
        }
    }
    return Array.from(map.keys())
}

var arr = [10,20,20,30,30,30,40]
var n = arr.length
console.log(RemoveDuplicates(arr,n));


// Rotate the array by k times

(function(){
    let rotate = function(arr,l,r){
        while(l<r){
            let a = arr[l]
            arr[l] = arr[r]
            arr[r] = a
            l++
            r--
        }
    }
    let RotatedArray = function(arr,n,k){
        rotate(arr,0,k-1)
        rotate(arr,k,n-1)
        rotate(arr,0,n-1)
        return arr
    }
    let arr = [1,2,3,4,5]
    let n = arr.length
    let k = 2
    console.log(RotatedArray(arr,n,k))
})()

let rotate = function(arr,l,r){
    while(l<r){
        let a = arr[l]
        arr[l] = arr[r]
        arr[r] = a
        l++
        r--
    }
}

let RotatedArray = function(arr,n,k){
    rotate(arr,0,k-1)
    rotate(arr,k,n-1)
    rotate(arr,0,n-1)
    return arr
}

var arr = [1,2,3,4,5]
var n = arr.length
var k = 2
console.log(RotatedArray(arr,n,k))

// Print odd numbers in the array by arrow functions 

let OddNumArrow = (arr,n)=>{
    let temp = new Array()
    for(let i=0;i<n;i++){
        if(arr[i]%2===1){
            temp.push(arr[i])
        }
    }
    return temp
}
var arr = [1,3,6,7,9,4,13,19]
var n = arr.length
console.log(OddNumArrow(arr,n))


// Convert all the strings to title caps in a string array by arrow function

let fun1arrow = (str_arr,n)=>{
    for(let i=0;i<n;i++){
        let str = str_arr[i].split('')
        let str1 = '' + str[0].toUpperCase() + str.slice(1).join('')
        str_arr[i] = str1
    }
    return str_arr
}
str_arr = ['hi','iam','rohithsingh']
var n = str_arr.length
console.log(fun1arrow(str_arr,n))


// sum of all numbers in a array by arrow functions

let SumArrow = (arr,n)=>{
    let sum = 0
    for(let i=0;i<n;i++){
        sum = sum + arr[i]
    }
    return sum
}
var arr = [1,3,6,7,9,4,13,19]
var n = arr.length
console.log(SumArrow(arr,n))


//  Return all prime numbers in an array by arrow functions


let IsprimeArrow = (n)=>{
    let n1 = Math.ceil(Math.sqrt(n))
    if(n===1){
        return false
    }
    if(n===2 || n===3){
        return true
    }
    if((n%2===0)||(n%3===0)){
        return false
    }
    let i = 5
    while(i<=n1){
        if(n%i === 0){
            return false
        }
        i = i + 2
        if(n%i === 0){
            return false
        }
        i = i + 4
    }
    if(n>=5){
        return true
    }
}

var arr = [1,2,3,4,5,6,7,13,23,35,39,43]
var n = arr.length
var temp = []
for(let i=0;i<n;i++){
    res = IsprimeArrow(arr[i])
    if(res){
        temp.push(arr[i])
    }
}
console.log(temp.join(' '))


// Return all palindromes in an array by arrow functions

let IsPalindromeArrow = (arr,n)=>{
    let l = 0
    let r = n-1
    while(l<r){
        if(arr[l]!==arr[r]){
            return false
        }
        l++
        r--
    }
    return true
}


var arr = ['abcba','abc','abcdcba','madam']
var n = arr.length
var temp = []
for(let i=0;i<n;i++){
    let res = IsPalindromeArrow(arr[i],arr[i].length)
    if(res){
        temp.push(arr[i])
    }
}
console.log(temp)





























































































