import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, Label, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

// Helper function for tooltip formatter
const formatTooltipValue = (value: ValueType): string => {
  if (typeof value === 'number') {
    return value >= 1000 ? value.toExponential(2) : String(Math.round(value * 100) / 100);
  }
  return String(value);
};

const BigOComplexityChart = () => {
  // Generate data points for different complexity classes
  const generateData = () => {
    const data = [];
    for (let n = 1; n <= 100; n += (n < 20 ? 1 : 5)) { // Adjusted step for n > 20
      const dataPoint = {
        n: n,
        constant: 1,
        logarithmic: n === 1 ? 0 : Math.log2(n), // Handle log2(1) = 0 explicitly
        linear: n,
        linearithmic: n === 1 ? 0 : n * Math.log2(n),
        quadratic: n * n,
        // Removed the cap for exponential
        exponential: Math.pow(2, n)
      };
      data.push(dataPoint);
    }
    return data;
  };

  const data = generateData();

  // Filtered data for different charts
  const efficientComplexities = data.map(item => ({
    n: item.n,
    'O(1)': item.constant,
    'O(log n)': item.logarithmic,
    'O(n)': item.linear
  }));

  const moderateComplexities = data.map(item => ({
    n: item.n,
    'O(n)': item.linear,
    'O(n log n)': item.linearithmic,
    'O(n²)': item.quadratic
  }));

  const inefficientDataPoints = 20; // Limit x-axis for exponential clarity
  const inefficientComplexities = data.filter(item => item.n <= inefficientDataPoints).map(item => ({
    n: item.n,
    'O(n²)': item.quadratic,
    'O(2^n)': item.exponential
  }));

  const allComplexitiesLog = data.filter(item => item.n <= inefficientDataPoints).map(item => ({
      ...item,
      logarithmic: Math.max(0.1, item.logarithmic), // Ensure log doesn't go to 0 for log scale
      linearithmic: Math.max(0.1, item.linearithmic),
      quadratic: Math.max(0.1, item.quadratic),
      exponential: Math.max(0.1, item.exponential)
  })); 

  // Updated practical examples table data
  const practicalExamples = [
    { n: 10, name: '10 elementen', constant: '1', logarithmic: '~3', linear: '10', linearithmic: '~33', quadratic: '100', exponential: '1.024' }, // Using '.' for thousands
    { n: 100, name: '100 elementen', constant: '1', logarithmic: '~7', linear: '100', linearithmic: '~664', quadratic: '10.000', exponential: '> 1.26e+30 (Extreem)' },
    { n: 1000000, name: '1 miljoen elementen', constant: '1', logarithmic: '~20', linear: '1 miljoen', linearithmic: '~20 miljoen', quadratic: '1 biljoen', exponential: 'Onvoorstelbaar groot' }
  ];

  const renderCharts = () => {
    return (
      <div className="flex flex-col space-y-10 w-full my-6">
        {/* Efficient Complexities Chart */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow border dark:border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-center">Efficiënte Complexiteiten</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={efficientComplexities} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" type="number" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} label={{ value: 'Input Grootte (n)', position: 'insideBottom', offset: -15 }} />
              <YAxis domain={[0, 100]} label={{ value: 'Operaties', angle: -90, position: 'insideLeft', offset: -5 }} />
              <Tooltip formatter={formatTooltipValue} />
              <Legend verticalAlign="top" wrapperStyle={{ top: 0 }}/>
              <Line type="monotone" dataKey="O(1)" stroke="#8884d8" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="O(log n)" stroke="#82ca9d" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="O(n)" stroke="#ff7300" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="text-sm mt-2 text-center text-gray-600 dark:text-gray-400">
            Focus: O(1), O(log n), en O(n) blijven laag bij toenemende n.
          </div>
        </div>

        {/* Moderate Complexities Chart */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow border dark:border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-center">Gematigde Complexiteiten</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={moderateComplexities} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" type="number" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} label={{ value: 'Input Grootte (n)', position: 'insideBottom', offset: -15 }} />
              <YAxis domain={[0, 10000]} label={{ value: 'Operaties', angle: -90, position: 'insideLeft', offset: -5 }} />
              <Tooltip formatter={formatTooltipValue} />
              <Legend verticalAlign="top" wrapperStyle={{ top: 0 }}/>
              <Line type="monotone" dataKey="O(n)" stroke="#ff7300" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="O(n log n)" stroke="#0088fe" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="O(n²)" stroke="#ff0000" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
           <div className="text-sm mt-2 text-center text-gray-600 dark:text-gray-400">
            Focus: O(n²) groeit veel sneller dan O(n log n) en O(n).
          </div>
        </div>

        {/* Inefficient Complexities Chart - Adjusted Y-Axis */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow border dark:border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-center">Inefficiënte Complexiteiten</h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={inefficientComplexities} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" type="number" domain={[0, inefficientDataPoints]} ticks={[0, 5, 10, 15, 20]} label={{ value: 'Input Grootte (n)', position: 'insideBottom', offset: -15 }} />
              {/* Significantly increased Y-axis domain for O(2^n) */}
              <YAxis domain={[0, Math.pow(2, inefficientDataPoints)]} tickFormatter={(tick) => tick >= 1000 ? tick.toExponential(0) : tick} label={{ value: 'Operaties', angle: -90, position: 'insideLeft', offset: -5 }} />
              <Tooltip formatter={formatTooltipValue} />
              <Legend verticalAlign="top" wrapperStyle={{ top: 0 }}/>
              <Line type="monotone" dataKey="O(n²)" stroke="#ff0000" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="O(2^n)" stroke="#8b0000" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="text-sm mt-2 text-center text-gray-600 dark:text-gray-400">
            Focus: O(2^n) groeit explosief. O(n²) is nauwelijks zichtbaar op deze schaal.
          </div>
        </div>

        {/* All Complexities Chart (Log Scale) */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow border dark:border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-center">Alle Complexiteiten (Logaritmische Schaal)</h3>
          <div className="text-sm italic mb-2 text-center text-gray-600 dark:text-gray-400">Let op: Y-as gebruikt een logaritmische schaal om de verschillen te tonen</div>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={allComplexitiesLog} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" type="number" domain={[1, inefficientDataPoints]} ticks={[1, 5, 10, 15, 20]} label={{ value: 'Input Grootte (n)', position: 'insideBottom', offset: -15 }} />
              <YAxis scale="log" domain={[0.1, 'auto']} allowDataOverflow={true} tickFormatter={(tick) => tick.toExponential(0)} label={{ value: 'Operaties (log schaal)', angle: -90, position: 'insideLeft', offset: -5 }} />
              <Tooltip formatter={formatTooltipValue} />
              <Legend verticalAlign="top" wrapperStyle={{ top: 0 }}/>
              <Line type="monotone" dataKey="constant" name="O(1)" stroke="#8884d8" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="logarithmic" name="O(log n)" stroke="#82ca9d" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="linear" name="O(n)" stroke="#ff7300" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="linearithmic" name="O(n log n)" stroke="#0088fe" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="quadratic" name="O(n²)" stroke="#ff0000" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="exponential" name="O(2^n)" stroke="#8b0000" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
           <div className="text-sm mt-2 text-center text-gray-600 dark:text-gray-400">
            Focus: Logaritmische schaal toont de relatieve groeiordes duidelijker.
          </div>
        </div>

        {/* Practical Comparison Table */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow border dark:border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-center">Praktische Vergelijking (Aantal Operaties)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse border border-gray-300 dark:border-gray-600">
              <thead className="bg-gray-200 dark:bg-gray-600">
                <tr>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">Input Grootte (n)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(1)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(log n)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(n)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(n log n)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(n²)</th>
                  <th className="p-2 border border-gray-300 dark:border-gray-500">O(2^n)</th>
                </tr>
              </thead>
              <tbody>
                {practicalExamples.map((example, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-700'}>
                    <td className="p-2 border border-gray-300 dark:border-gray-500 font-semibold">{example.name}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.constant}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.logarithmic}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.linear}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.linearithmic}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.quadratic}</td>
                    <td className="p-2 border border-gray-300 dark:border-gray-500">{example.exponential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center">Big O Complexiteit Visualisaties</h2>
      <div className="mb-6 prose prose-sm dark:prose-invert max-w-none"> {/* Applied prose styles */}
        <p> {/* Removed specific text color/size classes */}
          Deze grafieken visualiseren de verschillende Big O complexiteiten zoals beschreven in hoofdstuk 6.3. Ze tonen hoe de benodigde rekentijd (of geheugen) groeit naarmate de input (`n`) groter wordt.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 not-prose"> {/* Added not-prose */} 
          <div className="p-3 border rounded-lg bg-green-50 dark:bg-green-900 dark:border-green-700"> 
            <h4 className="font-bold mb-2 text-green-800 dark:text-green-200">Efficiënte Algoritmen</h4>
            <ul className="list-disc pl-5 text-sm text-green-700 dark:text-green-300 space-y-1"> 
              <li><strong>O(1)</strong> - constante tijd: Ideaal, tijd onafhankelijk van input.</li>
              <li><strong>O(log n)</strong> - logaritmische tijd: Zeer schaalbaar, tijd groeit minimaal.</li>
              <li><strong>O(n)</strong> - lineaire tijd: Goed schaalbaar, tijd groeit evenredig mee.</li>
            </ul>
          </div>
          <div className="p-3 border rounded-lg bg-red-50 dark:bg-red-900 dark:border-red-700">
            <h4 className="font-bold mb-2 text-red-800 dark:text-red-200">Minder Efficiënte Algoritmen</h4> 
            <ul className="list-disc pl-5 text-sm text-red-700 dark:text-red-300 space-y-1">
              <li><strong>O(n log n)</strong> - linearitmisch: Vaak acceptabel, standaard voor sorteren.</li>
              <li><strong>O(n²)</strong> - kwadratisch: Wordt snel traag, vermijd bij grote `n`.</li>
              <li><strong>O(2^n)</strong> - exponentieel: Extreem traag, alleen bruikbaar voor zeer kleine `n`.</li>
            </ul>
          </div>
        </div>
        <div className="p-3 border rounded-lg bg-blue-50 dark:bg-blue-900 dark:border-blue-700 mb-4 text-blue-800 dark:text-blue-200 not-prose"> {/* Added not-prose */}
          <p className="font-semibold mb-1">Belangrijk:</p>
          <p className="text-sm">De grafieken tonen de *groeisnelheid*. Let op de schaalverschillen (vooral op de Y-as) en hoe snel de lijnen stijgen. De logaritmische schaal helpt om alle lijnen in één grafiek te tonen.</p>
        </div>
      </div>
      {renderCharts()}
    </div>
  );
};

export default BigOComplexityChart; 