// =====================================================================
// Widget: receptor → control center → effector loops for the examples on
// animal 5.6 slides 141–174. Pick a situation; the loop fills in and says
// whether it is negative feedback (back to the set point) or positive
// feedback (pushes further away, usually in emergencies).
// To add a situation, add an entry to `cases`.
// =====================================================================
import { useState } from 'react';
import { T, WidgetFrame } from '../components/ui';

const cases = [
  { id: 'cold', label: 'อากาศหนาว', kind: 'neg', stimulus: 'อุณหภูมิร่างกายลดลง', receptor: 'ตัวรับอุณหภูมิที่ผิวหนัง', center: 'ไฮโปทาลามัส (heat-promoting center)', effector: 'กล้ามเนื้อสั่น · หลอดเลือดที่ผิวหดตัว · TRH → TSH → thyroxine เพิ่ม metabolism', response: 'อุณหภูมิกลับขึ้นสู่ 35.6–37.8 °C' },
  { id: 'hot', label: 'อากาศร้อน', kind: 'neg', stimulus: 'อุณหภูมิร่างกายสูงขึ้น', receptor: 'ตัวรับอุณหภูมิ', center: 'ไฮโปทาลามัส (heat-loss center)', effector: 'หลอดเลือดที่ผิวขยาย · ต่อมเหงื่อหลั่งเหงื่อ (ระเหยพาความร้อนออก)', response: 'อุณหภูมิลดลงสู่ปกติ' },
  { id: 'glu-hi', label: 'กลูโคสสูง (หลังกินข้าว)', kind: 'neg', stimulus: 'กลูโคสในเลือดสูงกว่า ~90 mg/100 mL', receptor: 'เซลล์ตับอ่อน', center: 'ตับอ่อน → หลั่ง insulin', effector: 'เซลล์ร่างกายรับกลูโคส · ตับสร้าง glycogen', response: 'กลูโคสในเลือดลดลงสู่ปกติ' },
  { id: 'glu-lo', label: 'กลูโคสต่ำ (อดอาหาร)', kind: 'neg', stimulus: 'กลูโคสในเลือดต่ำ', receptor: 'เซลล์ตับอ่อน', center: 'ตับอ่อน → หลั่ง glucagon', effector: 'ตับสลาย glycogen ปล่อยกลูโคส', response: 'กลูโคสในเลือดเพิ่มขึ้นสู่ปกติ' },
  { id: 'ca-lo', label: 'แคลเซียมในเลือดต่ำ', kind: 'neg', stimulus: 'Ca²⁺ ในเลือดต่ำกว่า ~10 mg/100 mL', receptor: 'ต่อมพาราไทรอยด์', center: 'หลั่ง PTH', effector: 'กระตุ้น osteoclast · ไตเก็บ Ca²⁺ · ลำไส้ดูดซึม Ca²⁺ มากขึ้น', response: 'Ca²⁺ ในเลือดเพิ่มขึ้นสู่ปกติ' },
  { id: 'osm', label: 'เหงื่อออกมาก', kind: 'neg', stimulus: 'osmolarity ของเลือดสูงขึ้น', receptor: 'osmoreceptor ในไฮโปทาลามัส', center: 'ต่อมใต้สมองส่วนหลังปล่อย ADH (+ กระหายน้ำ)', effector: 'collecting duct ดูดน้ำกลับมากขึ้น', response: 'osmolarity กลับสู่ ~300 mOsm/L' },
  { id: 'oxy', label: 'ลูกดูดนม / คลอดบุตร', kind: 'pos', stimulus: 'ลูกดูดนม กระตุ้นตัวรับที่หัวนม', receptor: 'ตัวรับที่หัวนม → เส้นประสาทไขสันหลัง', center: 'ไฮโปทาลามัส → ต่อมใต้สมองส่วนหลังปล่อย oxytocin', effector: 'ต่อมน้ำนมหลั่งน้ำนม (มดลูกหดตัวขณะคลอด)', response: 'ยิ่งดูด ยิ่งหลั่ง oxytocin มากขึ้น — จนกว่าจะหยุดดูด' },
  { id: 'clot', label: 'เกิดบาดแผล', kind: 'pos', stimulus: 'หลอดเลือดฉีกขาด', receptor: 'เกล็ดเลือดเกาะบริเวณแผล', center: 'เกล็ดเลือดปล่อยสารเคมี', effector: 'สารดึงดูดเกล็ดเลือดเพิ่มขึ้นอีก', response: 'ลิ่มเลือดโตขึ้นเรื่อย ๆ จนปิดแผลได้' },
] as const;

export function FeedbackLoop() {
  const [id, setId] = useState<string>('cold');
  const c = cases.find((x) => x.id === id)!;
  const rows = [
    ['สิ่งเร้า (stimulus)', c.stimulus],
    ['ตัวรับ (receptor)', c.receptor],
    ['ศูนย์ควบคุม (control center)', c.center],
    ['อวัยวะแสดงผล (effector)', c.effector],
    ['ผลตอบสนอง (response)', c.response],
  ];
  return (
    <WidgetFrame
      title="วงจรควบคุมสมดุล"
      notice="ทุกกรณีมี **receptor → control center → effector** · ถ้าผลตอบสนอง**หักล้าง**สิ่งเร้า = negative feedback · ถ้า**เสริม**ให้มากขึ้นไปอีก = positive feedback (มักพบในกรณีฉุกเฉิน)"
      onReset={() => setId('cold')}
    >
      <div className="seg">
        {cases.map((x) => (
          <button key={x.id} className={x.id === id ? 'on' : ''} onClick={() => setId(x.id)} style={{ fontSize: '0.8rem' }}>
            {x.label}
          </button>
        ))}
      </div>
      <ol className="order-list" style={{ marginTop: 8 }}>
        {rows.map(([k, v], i) => (
          <li key={k} style={{ gridTemplateColumns: 'auto 1fr' }}>
            <span className="num">{i + 1}</span>
            <span>
              <b>{k}</b>
              <br />
              <T>{v}</T>
            </span>
          </li>
        ))}
      </ol>
      <div className={`feedback ${c.kind === 'neg' ? 'good' : 'hint'}`}>
        {c.kind === 'neg' ? '↺ negative feedback — กลับสู่ set point' : '↗ positive feedback — เร่งให้ห่างจาก set point มากขึ้น'}
      </div>
    </WidgetFrame>
  );
}
