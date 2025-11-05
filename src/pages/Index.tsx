import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, LineChart, Line } from 'recharts';

const Index = () => {
  const citizenAppeals = [
    { text: 'Отопление', size: 48, weight: 900, color: '#0EA5E9' },
    { text: 'Дороги', size: 32, weight: 700, color: '#10B981' },
    { text: 'Благоустройство', size: 28, weight: 600, color: '#8B5CF6' },
    { text: 'ЖКХ', size: 36, weight: 700, color: '#F97316' },
    { text: 'Освещение', size: 24, weight: 600, color: '#0EA5E9' },
    { text: 'Парковки', size: 20, weight: 500, color: '#10B981' },
    { text: 'Детские площадки', size: 22, weight: 500, color: '#8B5CF6' },
    { text: 'Вывоз мусора', size: 26, weight: 600, color: '#F97316' },
    { text: 'Транспорт', size: 30, weight: 700, color: '#0EA5E9' },
    { text: 'Магазины', size: 18, weight: 500, color: '#10B981' },
    { text: 'Водоснабжение', size: 24, weight: 600, color: '#8B5CF6' }
  ];

  const headTasks = [
    {
      task: 'Решить проблему отопления в МКД по ул. Ленина 15',
      deadline: '07.11.2025',
      aiTip: 'Провести срочное совещание с представителями УК. Проверить техническое состояние котельной.',
      priority: 'high'
    },
    {
      task: 'Подготовить отчет по инвестпроектам за Q3',
      deadline: '10.11.2025',
      aiTip: 'Использовать данные из раздела "Инвестиционные проекты". Акцент на создание рабочих мест.',
      priority: 'medium'
    },
    {
      task: 'Организовать проверку торговых точек',
      deadline: '12.11.2025',
      aiTip: 'Координация с отделом торговли. Приоритет - объекты с жалобами граждан.',
      priority: 'medium'
    }
  ];

  const agricultureData = [
    { name: 'Растениеводство', value: 40 },
    { name: 'Животноводство', value: 35 },
    { name: 'Бытовые услуги', value: 25 }
  ];

  const investmentData = [
    { project: 'Логистический центр', investment: 250, jobs: 120 },
    { project: 'Торговый комплекс', investment: 180, jobs: 85 },
    { project: 'Производство', investment: 320, jobs: 200 },
    { project: 'Сервисный центр', investment: 150, jobs: 60 },
    { project: 'Агрокомплекс', investment: 280, jobs: 95 }
  ];

  const employmentData = [
    { sector: 'Торговля', official: 2400, shadow: 320 },
    { sector: 'Услуги', official: 1800, shadow: 280 },
    { sector: 'Производство', official: 1500, shadow: 150 },
    { sector: 'Сельское хоз.', official: 900, shadow: 200 }
  ];

  const forecastData = [
    { quarter: 'Q1', actual: 2400, forecast: 2200 },
    { quarter: 'Q2', actual: 2800, forecast: 2600 },
    { quarter: 'Q3', actual: null, forecast: 3100 },
    { quarter: 'Q4', actual: null, forecast: 3400 }
  ];

  const COLORS = ['#0EA5E9', '#10B981', '#FCD34D', '#8B5CF6', '#F97316'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBFQTVFOSIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto p-3 relative z-10">
        <header className="mb-4 backdrop-blur-glass bg-white/40 rounded-3xl p-4 border border-white/50 shadow-lg animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img 
                src="https://cdn.poehali.dev/files/27d55dc4-077c-45e1-80f3-279e06c7f137.png" 
                alt="Герб Одинцовского ГО" 
                className="h-20 w-20 object-contain drop-shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">ИИ ПАНЕЛЬ АДМИНИСТРАЦИИ</h1>
                <p className="text-cyan-700 font-medium mt-1 text-3xl">Управление развития потребительского рынка и услуг</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 backdrop-blur-glass bg-white/60 rounded-2xl p-4 border border-white/70">
              <Avatar className="h-12 w-12 border-2 border-yellow-400">
                <AvatarFallback className="bg-gradient-to-br from-cyan-500 to-emerald-500 text-white font-semibold">
                  ЗГ
                </AvatarFallback>
              </Avatar>
              <div className="text-right">
                <p className="font-semibold text-cyan-900">Иванов И.И.</p>
                <p className="text-sm text-cyan-700">Заместитель Главы Администрации</p>
              </div>
            </div>
          </div>
        </header>

        <Card className="backdrop-blur-glass bg-gradient-to-br from-yellow-400/30 to-amber-400/30 border-2 border-yellow-400 rounded-3xl p-4 shadow-xl mb-4 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl animate-float">
              <Icon name="Sparkles" className="text-white" size={28} />
            </div>
            <h3 className="font-bold text-amber-900 text-4xl">ИИ-Рекомендации по развитию</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-white/70 rounded-2xl border border-yellow-300">
              <div className="flex items-start gap-3">
                <Icon name="Store" className="text-cyan-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-cyan-900 mb-2">Торговля</h4>
                  <p className="text-sm text-cyan-800">Расширить зоны электронной коммерции на 35%. Открыть 3 новых торговых центра в северном районе.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/70 rounded-2xl border border-yellow-300">
              <div className="flex items-start gap-3">
                <Icon name="Wheat" className="text-emerald-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-emerald-900 mb-2">Агросектор</h4>
                  <p className="text-sm text-emerald-800">Увеличить субсидии растениеводству на 20%. Внедрить цифровизацию животноводческих ферм.</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/70 rounded-2xl border border-yellow-300">
              <div className="flex items-start gap-3">
                <Icon name="Users" className="text-purple-600 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-bold text-purple-900 mb-2">Занятость</h4>
                  <p className="text-sm text-purple-800">Легализовать теневой сектор через льготное налогообложение. Создать 450 рабочих мест.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 col-span-1 md:col-span-2 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Инвестиционные проекты</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                <XAxis 
                  type="number" 
                  dataKey="investment" 
                  name="Инвестиции" 
                  unit=" млн ₽"
                  stroke="#0e7490"
                />
                <YAxis 
                  type="number" 
                  dataKey="jobs" 
                  name="Рабочие места" 
                  stroke="#0e7490"
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="Проекты" data={investmentData} fill="#8B5CF6" />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-4">
              {investmentData.map((project, idx) => (
                <div key={idx} className="p-2 bg-purple-50 rounded-lg border border-purple-200 text-center">
                  <p className="text-xs text-purple-900 font-medium truncate">{project.project}</p>
                  <p className="text-lg font-bold text-purple-700">{project.investment}M</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl">
                <Icon name="Wheat" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Сельское хозяйство</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={agricultureData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {agricultureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl">
                <Icon name="MessageSquare" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Обращения граждан</h3>
            </div>
            <div className="relative h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-4">
                {citizenAppeals.map((appeal, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: `${appeal.size}px`,
                      fontWeight: appeal.weight,
                      color: appeal.color,
                      lineHeight: '1.2'
                    }}
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    {appeal.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 p-3 bg-cyan-50 rounded-xl border border-cyan-200">
              <p className="text-sm text-cyan-800">
                <Icon name="TrendingUp" className="inline mr-2" size={16} />
                Всего обращений: <span className="font-bold">1847</span> за месяц
              </p>
            </div>
          </Card>

          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl">
                <Icon name="ClipboardList" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Поручения главы</h3>
            </div>
            <div className="space-y-3">
              {headTasks.map((task, idx) => (
                <div key={idx} className={`p-3 rounded-2xl border-2 ${
                  task.priority === 'high' 
                    ? 'bg-red-50 border-red-300' 
                    : 'bg-blue-50 border-blue-300'
                }`}>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-sm font-bold text-cyan-900 flex-1">{task.task}</p>
                    <Badge variant="outline" className="text-xs">{task.deadline}</Badge>
                  </div>
                  <div className="flex items-start gap-2 mt-2 p-2 bg-white/60 rounded-lg">
                    <Icon name="Lightbulb" className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-xs text-cyan-800">{task.aiTip}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl">
                <Icon name="Users" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Анализ занятости</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={employmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                <XAxis dataKey="sector" stroke="#0e7490" />
                <YAxis stroke="#0e7490" />
                <Tooltip />
                <Legend />
                <Bar dataKey="official" fill="#10B981" name="Официальная" radius={[10, 10, 0, 0]} />
                <Bar dataKey="shadow" fill="#F97316" name="Теневой сектор" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-orange-50 rounded-xl border border-orange-200">
              <p className="text-sm text-orange-800">
                <Icon name="Eye" className="inline mr-2" size={16} />
                Выявлено теневых секторов: <span className="font-bold">15%</span>
              </p>
            </div>
          </Card>

          <Card className="backdrop-blur-glass bg-white/50 border border-white/60 rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 col-span-1 md:col-span-2 xl:col-span-3 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl">
                <Icon name="LineChart" className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-cyan-900">Прогнозы и аналитика</h3>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
                <XAxis dataKey="quarter" stroke="#0e7490" />
                <YAxis stroke="#0e7490" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#0EA5E9" 
                  strokeWidth={3}
                  name="Фактические показатели"
                  dot={{ fill: '#0EA5E9', r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Прогноз"
                  dot={{ fill: '#10B981', r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;