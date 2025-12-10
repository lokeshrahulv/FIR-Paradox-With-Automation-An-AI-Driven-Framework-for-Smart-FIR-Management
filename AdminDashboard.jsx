import { useEffect, useState } from 'react';
import api from '../services/api.js';
import StatsGrid from '../components/StatsGrid.jsx';
import CityHeatmap from '../components/charts/CityHeatmap.jsx';
import FirLookup from '../components/FirLookup.jsx';

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState({
    totalFirs: 0,
    activeCases: 0,
    closedCases: 0,
    policePending: 0,
    policeApproved: 0,
    policeRejected: 0,
    policeMoreInfo: 0,
    judiciaryNotReviewed: 0,
    judiciaryInReview: 0,
    judiciaryAccepted: 0,
    judiciaryRejected: 0,
  });
  const [heatmap, setHeatmap] = useState([]);
  const [loadingHeatmap, setLoadingHeatmap] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const [overviewRes, heatmapRes] = await Promise.all([
          api.get('/admin/analytics/overview'),
          api.get('/admin/analytics/heatmap'),
        ]);
        setMetrics(overviewRes.data);
        setHeatmap(heatmapRes.data?.heatmap || []);
      } finally {
        setLoadingHeatmap(false);
      }
    };
    setLoadingHeatmap(true);
    load();
  }, []);

  const stats = [
    { label: 'Total FIRs', value: metrics.totalFirs },
    { label: 'Active escalations', value: metrics.activeCases },
    { label: 'Closed after judiciary', value: metrics.closedCases },
    { label: 'Awaiting police action', value: metrics.policePending },
  ];

  const statusCards = [
    {
      title: 'Police Pending',
      value: metrics.policePending,
      description: 'Awaiting verification from the assigned station.',
    },
    {
      title: 'Police Approved',
      value: metrics.policeApproved,
      description: 'Forwarded to the judiciary for hearings.',
    },
    {
      title: 'Judge In Review',
      value: metrics.judiciaryInReview,
      description: 'Judges actively reviewing the case dossier.',
    },
    {
      title: 'Judge Rejected',
      value: metrics.judiciaryRejected,
      description: 'Cases rejected at judiciary level and returned.',
    },
  ];

  const detailRows = [
    {
      label: 'Waiting for judge pickup',
      value: metrics.judiciaryNotReviewed,
      note: 'Cases approved by police but not yet opened by a judge.',
    },
    {
      label: 'Hearing scheduled',
      value: metrics.judiciaryAccepted,
      note: 'Accepted cases with court dates shared to citizens.',
    },
    {
      label: 'Citizen action required',
      value: metrics.policeMoreInfo,
      note: 'Police requested clarifications or supporting documents.',
    },
    {
      label: 'Rejected at police desk',
      value: metrics.policeRejected,
      note: 'Cases closed before judiciary escalation.',
    },
  ];

  return (
    <div className="space-y-6">
      <StatsGrid stats={stats} />

      <FirLookup
        title="Search FIRs by ID"
        description="Enter a FIR ID or keyword to quickly surface its latest status across police and judiciary."
      />

      <div className="rounded-3xl bg-white p-6 shadow">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-slate-900">Case Flow Snapshot</h2>
          <p className="text-sm text-slate-500">
            Quick view of where every FIR currently sits inside the police and judiciary pipeline.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statusCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-500">{card.title}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{card.value}</p>
              <p className="mt-1 text-xs text-slate-500">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {detailRows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-slate-100 p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-600">{row.label}</p>
                <span className="text-2xl font-bold text-slate-900">{row.value}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{row.note}</p>
            </div>
          ))}
        </div>
      </div>

      <CityHeatmap data={heatmap} />
      {loadingHeatmap && <p className="text-sm text-slate-500">Loading heatmap…</p>}
    </div>
  );
};

export default AdminDashboard;
