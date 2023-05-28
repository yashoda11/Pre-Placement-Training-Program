// Javascript program to shift all zeros
// to right most side of array
// without affecting order of non-zero
// elements.

// function to shift zeros
function move_zeros_to_right( m)
{
	let count = 0;
	for (let i = 0; i < m.length; i++) {
		if (m[i] == 0) {
			count++;
			
			// deleting the element from vector
			//m.erase(m.begin() + i);
			m.splice(i,1);
			i--;
		}
	}
	
	for (let i = 0; i < count; i++)
	{
	
		// inserting the zero into vector
		m.push(0);
	}
	console.log( "array after shifting zeros to right side: ");
	var str= m.join(' ');
	console.log(str)
}

// driver code
	let m = [ 5, 6, 0, 4, 6, 0, 9, 0, 8 ];
	
	// function call
	move_zeros_to_right(m);
	
	// This code is contributed by garg28harsh.
