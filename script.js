
// Minimal interactivity: open modal, collect email, simulate checkout
document.addEventListener('DOMContentLoaded',()=> {
  const modal = document.getElementById('checkout-modal');
  const form = document.getElementById('buy-form');
  const productTitle = document.getElementById('product-title');
  let selectedProduct = null;

  document.querySelectorAll('.buy-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const id = btn.dataset.id;
      selectedProduct = id;
      const title = btn.parentElement.parentElement.querySelector('h4').innerText;
      productTitle.innerText = title;
      modal.setAttribute('aria-hidden','false');
    });
  });

  document.querySelectorAll('.modal-close').forEach(b=>b.addEventListener('click',()=> modal.setAttribute('aria-hidden','true')));

  form.addEventListener('submit', e=>{
    e.preventDefault();
    const email = document.getElementById('buyer-email').value;
    if(!email) return alert('Please enter your email');
    // Simulate creating a checkout session and redirect to Stripe
    alert('This demo will simulate checkout. In production this button should call your /api/checkout_sessions.');
    modal.setAttribute('aria-hidden','true');
  });
});
