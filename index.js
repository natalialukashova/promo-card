/*
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
*/

/*function addElement() {
  let cardCaption = document.querySelector('.card')
  хотела сделать добавление элемента функцией, но не додумалась как
}*/

let card = document.createElement('div')
card.className = 'card'
document.body.append(card)

let cardCaption = document.createElement('div')
cardCaption.className = 'card-caption'
cardCaption.innerHTML = 'Популярный выбор'
card.append(cardCaption)

let cardName = document.createElement('div')
cardName.className = 'card-name'
cardName.innerHTML = 'M Ultra'
card.append(cardName)

let cardDescription = document.createElement('div')
cardDescription.className = 'card-description'
cardDescription.innerHTML = 'CentOS 8'
card.append(cardDescription)
//
let CharlistItemForCPU = document.createElement('div')
CharlistItemForCPU.className = 'card-description_charlist_item'
card.append(CharlistItemForCPU)

let CPUCardParam = document.createElement('p')
CPUCardParam.className = 'card-description_charlist_param'
CPUCardParam.innerHTML = 'CPU Intel® Xeon® Gold'
CharlistItemForCPU.append(CPUCardParam)

let valueForCPUCardParam = document.createElement('p')
valueForCPUCardParam.className = 'card-description_charlist_value'
valueForCPUCardParam.innerHTML = '4 Ядра'
CharlistItemForCPU.append(valueForCPUCardParam)
//
let CharlistItemForRAM = document.createElement('div')
CharlistItemForRAM.className = 'card-description_charlist_item'
card.append(CharlistItemForRAM)

let RAMCardParam = document.createElement('p')
RAMCardParam.className = 'card-description_charlist_param'
RAMCardParam.innerHTML = 'RAM'
CharlistItemForRAM.append(RAMCardParam)

let valueRAMCardParam = document.createElement('p')
valueRAMCardParam.className = 'card-description_charlist_value'
valueRAMCardParam.innerHTML = '6 ГБ'
CharlistItemForRAM.append(valueRAMCardParam)
//
let CharlistItemForSSD = document.createElement('div')
CharlistItemForSSD.className = 'card-description_charlist_item'
card.append(CharlistItemForSSD)

let SSDCardParam = document.createElement('p')
SSDCardParam.className = 'card-description_charlist_param'
SSDCardParam.innerHTML = 'Диск NVMe'
CharlistItemForSSD.append(SSDCardParam)

let valueSSDCardParam = document.createElement('p')
valueSSDCardParam.className = 'card-description_charlist_value'
valueSSDCardParam.innerHTML = '100 Гб SSD'
CharlistItemForSSD.append(valueSSDCardParam)