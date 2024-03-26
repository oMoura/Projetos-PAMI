function calcularGastos(luz_kWh, agua_m3, gas_m3) {
   
    const custoLuzPorKWh = 0.5; 
    const custoAguaPorM3 = 5;    
    const custoGasPorM3 = 2;     
  
    const gastoLuz = luz_kWh * custoLuzPorKWh;
    const gastoAgua = agua_m3 * custoAguaPorM3;
    const gastoGas = gas_m3 * custoGasPorM3;
  
    const totalGastos = gastoLuz + gastoAgua + gastoGas;
  
    return {
      luz: gastoLuz.toFixed(2),
      agua: gastoAgua.toFixed(2),
      gas: gastoGas.toFixed(2),
      total: totalGastos.toFixed(2)
    };
  }
  
  const resultado = calcularGastos(100, 10, 5); 
  
  console.log("Custo da luz: R$" + resultado.luz);
  console.log("Custo da água: R$" + resultado.agua);
  console.log("Custo do gás: R$" + resultado.gas);
  console.log("Total: R$" + resultado.total);