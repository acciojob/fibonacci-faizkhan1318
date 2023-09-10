function fibonacci(num) {
// your code here
	if(nums<=1){
		return num;
	}
	return fibonacci(num-1) + fibonacci(num-2);
}

module.exports = fibonacci;
