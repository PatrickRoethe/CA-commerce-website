document
  .getElementById('toggleCheckout')
  .addEventListener('click', function () {
    let menu = document.getElementById('checkout');

    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
