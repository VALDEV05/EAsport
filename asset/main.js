document.getElementById('dropdown-giochi').addEventListener('click', function openMenuGiochi() {
    document.getElementById('dropdown-giochi').classList.toggle('text-active-dropdown');
    document.getElementById('dropdown-submenu-giochi').classList.toggle('active');
    document.getElementById('icon-dropdown-giochi').classList.toggle('upset');
}, true);

document.getElementById('dropdown-esperienze').addEventListener('click', function openMenuEsperienze() {
    document.getElementById('dropdown-submenu-esperienze').classList.toggle('active');
    document.getElementById('dropdown-esperienze').classList.toggle('text-active-dropdown');
    document.getElementById('icon-dropdown-esperienze').classList.toggle('upset');
}, true);


document.getElementById('dropdown-informazioni').addEventListener('click', function openMenuInformazioni() {
    document.getElementById('dropdown-submenu-informazioni').classList.toggle('active');
    document.getElementById('dropdown-informazioni').classList.toggle('text-active-dropdown');
    document.getElementById('icon-dropdown-informazioni').classList.toggle('upset');
}, true);

document.getElementById('dropdown-impegni').addEventListener('click', function openMenuImpegni() {
    document.getElementById('dropdown-submenu-impegni').classList.toggle('active');
    document.getElementById('dropdown-impegni').classList.toggle('text-active-dropdown');
    document.getElementById('icon-dropdown-impegni').classList.toggle('upset');
}, true);

document.getElementById('dropdown-risorse').addEventListener('click', function openMenuRisorse() {
    document.getElementById('dropdown-submenu-risorse').classList.toggle('active');
    document.getElementById('dropdown-risorse').classList.toggle('text-active-dropdown');
    document.getElementById('icon-dropdown-risorse').classList.toggle('upset');
}, true);