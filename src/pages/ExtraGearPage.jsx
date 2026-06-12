import { useState } from 'react';
import { Ico } from '../components/Ico';
import { openKakao } from '../lib/format';

export function ExtraGearPage({ setPage }) {
  const [gear, setGear] = useState('');
  const [situation, setSituation] = useState('');
  const [contact, setContact] = useState('');

  const submit = () => {
    if (!gear.trim()) return;
    const msg = `[추가 장비 요청]\n\n`
      + `필요한 장비 · ${gear}\n`
      + (situation ? `필요했던 상황 · ${situation}\n` : '')
      + (contact ? `연락처 · ${contact}\n` : '');
    openKakao(msg);
  };

  return (
    <section className="pt-28 md:pt-36 px-6 md:px-10 max-w-[760px] mx-auto pb-24">
      <button onClick={() => setPage('home')} className="text-[13px] text-muted hover:text-ink inline-flex items-center gap-1.5 mb-8">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 18l-6-6 6-6"/></svg> 홈으로
      </button>

      <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted mb-2">EXTRA GEAR</div>
      <h1 className="font-display font-bold text-4xl md:text-5xl leading-none mb-4">추가 장비 요청</h1>
      <p className="text-[14px] text-muted leading-relaxed mb-10">
        대여하려 했지만 스케아트에 없어서 빌리지 못한 장비가 있다면 남겨주세요.
        접수된 요청은 신규 입고 검토와 장비 구성 업데이트에 참고합니다.
      </p>

      <div className="border border-line p-6 md:p-8 space-y-5">
        <div>
          <label className="text-[14px] font-bold text-ink block mb-2">필요한 장비 <span className="text-red-500">*</span></label>
          <input value={gear} onChange={e => setGear(e.target.value)}
            placeholder="예) SONY 85mm GM, C-stand, 오디오 인터페이스"
            className="w-full border border-line focus:border-ink outline-none px-3 py-3 text-[14px] bg-transparent"/>
        </div>
        <div>
          <label className="text-[14px] font-bold text-ink block mb-2">필요했던 상황</label>
          <input value={situation} onChange={e => setSituation(e.target.value)}
            placeholder="촬영 날짜, 용도, 필요한 수량 등을 적어주세요."
            className="w-full border border-line focus:border-ink outline-none px-3 py-3 text-[14px] bg-transparent"/>
        </div>
        <div>
          <label className="text-[14px] font-bold text-ink block mb-2">연락처</label>
          <input value={contact} onChange={e => setContact(e.target.value)}
            placeholder="카톡 ID 또는 연락처"
            className="w-full border border-line focus:border-ink outline-none px-3 py-3 text-[14px] bg-transparent"/>
          <p className="text-[12px] text-muted mt-1.5">해당 장비 입고 시 연락 드립니다.</p>
        </div>

        <button onClick={submit} disabled={!gear.trim()}
          className="w-full bg-kakao text-ink py-4 inline-flex items-center justify-center gap-2 hover-lift disabled:opacity-40">
          <Ico.chat className="w-4 h-4"/> 추가 장비 신청
        </button>
        <p className="text-[12px] text-muted text-center">버튼을 누르면 입력하신 내용이 카카오톡 메시지로 자동 작성돼요.</p>
      </div>
    </section>
  );
}
