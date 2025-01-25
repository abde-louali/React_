import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Statistic() {
  const monthlyData = [
    { month: 'Jan', users: 4000, revenue: 2400, engagement: 2400 },
    { month: 'Feb', users: 3000, revenue: 1398, engagement: 2210 },
    { month: 'Mar', users: 2000, revenue: 9800, engagement: 2290 },
    { month: 'Apr', users: 2780, revenue: 3908, engagement: 2000 },
    { month: 'May', users: 1890, revenue: 4800, engagement: 2181 },
    { month: 'Jun', users: 2390, revenue: 3800, engagement: 2500 },
  ];

  const statistics = [
    { title: 'Utilisateurs Totaux', value: '15,890', change: '+12%' },
    { title: 'Revenus Mensuels', value: '€24,500', change: '+8%' },
    { title: 'Taux de Conversion', value: '3.2%', change: '+0.8%' },
    { title: 'Temps Moyen', value: '12m 30s', change: '-2%' },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Tableau de Bord Statistique</h1>
        <p className="text-gray-600">Vue d'ensemble des performances clés</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statistics.map((stat) => (
          <div
            key={stat.title}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              {stat.title}
            </h3>
            <div className="mt-3 flex items-baseline justify-between">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <span
                className={`ml-2 text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Tendance des Utilisateurs</h2>
          <div className="h-80 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#4F46E5"
                  name="Utilisateurs"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="engagement"
                  stroke="#22C55E"
                  name="Engagement"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Revenus Mensuels</h2>
          <div className="h-80 flex-1">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#4F46E5" name="Revenus" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
