document.getElementById('loginTab').addEventListener('click', function() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    this.classList.add('border-b-2', 'border-red-500');
    document.getElementById('registerTab').classList.remove('border-b-2', 'border-red-500');
  });
  
  document.getElementById('registerTab').addEventListener('click', function() {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    this.classList.add('border-b-2', 'border-red-500');
    document.getElementById('loginTab').classList.remove('border-b-2', 'border-red-500');
  });
  