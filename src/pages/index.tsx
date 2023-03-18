import StaticTerminal from './StaticTerminal';

export default function IndexPage() {
  const socketUrl = '';
  return (
    <div className="kubectl-outter">
      <div className="kubectl-inner">
        <StaticTerminal />
        {/* <DynamicTerminal wsUrl={socketUrl} /> */}
      </div>
    </div>
  );
}
