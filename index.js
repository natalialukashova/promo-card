const valueForCard = {
   cardCaption: 'Популярный выбор',
   cardName: 'M Ultra',
   cardDescription: 'CentOS 8',
   CPUCardParam: 'CPU Intel® Xeon® Gold',
   valueForCPUCardParam: '4 Ядра',
   RAMCardParam:'RAM',
   valueRAMCardParam: '6 ГБ',
   SSDCardParam: 'Диск NVMe',
   valueSSDCardParam: '100 Гб SSD'
}
document.querySelectorAll('[data-type]').forEach(item => item.textContent = valueForCard[item.dataset.type])