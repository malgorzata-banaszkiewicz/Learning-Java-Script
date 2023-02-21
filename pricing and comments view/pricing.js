const range = document.getElementById('type_of_payment');
const monthly_basic = document.getElementById('pricing_monthly_basic') ;
const monthly_master = document.getElementById ('pricing_monthly_master');
const monthly_professional = document.getElementById ('pricing_monthly_professional');
const annually_basic = document.getElementById('pricing_annually_basic');
const annually_master = document.getElementById ('pricing_annually_master');
const annually_professional = document.getElementById ('pricing_annually_professional');

range.addEventListener('input', () => {
    const value = range.value;
    if (value == 1) {
        monthly_basic.style.display = 'none';
        monthly_master.style.display = 'none';
        monthly_professional.style.display = 'none';
        annually_basic.style.display = 'flex';
        annually_master.style.display = 'flex';
        annually_professional.style.display = 'flex';
    }
    else {
        monthly_basic.style.display = 'flex';
        monthly_master.style.display = 'flex';
        monthly_professional.style.display = 'flex';
        annually_basic.style.display = 'none';
        annually_master.style.display = 'none';
        annually_professional.style.display = 'none';
    }
    
});


