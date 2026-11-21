// =====================================================================
// Registers every widget under an id so pages can write <W id="..."/>.
//
// Two kinds:
//   - simple "tap the diagram" widgets are made right here with
//     DiagramExplorer (diagram id + a ลองสังเกต line),
//   - everything else has its own file in this folder.
// To add a widget: write it (or add an explorer line), then add
// `reg('id', 'ชื่อ', Component)` below. #/w/<id> shows it alone.
// =====================================================================
import { createElement } from 'react';
import type { ComponentType } from 'react';
import { DiagramExplorer } from '../components/TapDiagram';
import { widgets } from './registry';
import { AuxinBending } from './AuxinBending';
import { AuxinCytokinin } from './AuxinCytokinin';
import { AuxinDose } from './AuxinDose';
import { BirdAirSacs } from './BirdAirSacs';
import { FeedbackLoop } from './FeedbackLoop';
import { KidneyControl } from './KidneyControl';
import { NephronPath } from './NephronPath';
import { NitrogenWaste } from './NitrogenWaste';
import { GlucoseSim } from './GlucoseSim';
import { ReflexArc } from './ReflexArc';
import { Breathing } from './Breathing';
import { Countercurrent } from './Countercurrent';
import { PartialPressure } from './PartialPressure';
import { CapillaryExchange } from './CapillaryExchange';
import { CardiacCycle } from './CardiacCycle';
import { CardiacOutput } from './CardiacOutput';
import { CellWalls } from './CellWalls';
import { HeartPath } from './HeartPath';
import { VertebrateHearts } from './VertebrateHearts';
import { VesselFlow } from './VesselFlow';
import { Phytochrome } from './Phytochrome';
import { DeficiencyExplorer } from './DeficiencyExplorer';
import { EpitheliumBuilder } from './EpitheliumBuilder';
import { ExchangeSurface } from './ExchangeSurface';
import { FoodJourney } from './FoodJourney';
import { Swallowing } from './Swallowing';
import { TractTypes } from './TractTypes';
import { PlantXSection } from './PlantXSection';
import { PressureFlow } from './PressureFlow';
import { PsiTree } from './PsiTree';
import { SecondaryGrowth } from './SecondaryGrowth';
import { Transpiration } from './Transpiration';
import { WaterPotential } from './WaterPotential';
import { FundamentalQuestions } from './FundamentalQuestions';
import { SpecimenLabel } from './SpecimenLabel';
import { HomininDNA } from './HomininDNA';
import { CabinetToData } from './CabinetToData';
import { BiomeExplorer } from './BiomeExplorer';
import { QuadratSampler } from './QuadratSampler';
import { MarkRecapture } from './MarkRecapture';
import { GrowthCurves } from './GrowthCurves';
import { Demography } from './Demography';
import { InteractionFinder } from './InteractionFinder';
import { Succession } from './Succession';
import { EnergyPyramid } from './EnergyPyramid';
import { ExtinctionRates } from './ExtinctionRates';

const reg = (id: string, title: string, C: ComponentType) => {
  widgets[id] = { title, C };
};

/** A tap-to-learn widget for one diagram. */
const explorer = (id: string, diagram: string, title: string, notice: string) =>
  reg(id, title, () => createElement(DiagramExplorer, { id: diagram, title, notice }));

// ---------------------------------------------------------- plant 5.1–5.2
explorer('plant-body', 'plant-body', 'โครงสร้างต้นพืช', 'ข้อ (node) คือที่ที่ใบติด ปล้องอยู่ระหว่างข้อ — **ตาข้างอยู่ที่ซอกใบ** และ**เนื้อเยื่อเจริญ**มี 2 จุดหลัก: ปลายยอด (SAM) กับปลายราก (ใต้หมวกราก)');
reg('plant-xsection', 'ภาคตัดขวางราก/ลำต้น', PlantXSection);
explorer('leaf-explorer', 'leaf', 'ภาคตัดขวางใบ', 'ไล่จากบนลงล่าง: รวมแสง (epidermis) → ดูดกลืนแสง (palisade แน่น) → แก๊สแพร่ (spongy หลวม) → ปากใบ (ผิวล่าง) · เส้นใบมี**ไซเลมด้านบน โฟลเอ็มด้านล่าง**');
reg('cell-walls', 'ผนังเซลล์ 4 แบบ', CellWalls);
explorer('root-zones', 'root-tip', 'ปลายราก', 'เรียงจากปลาย: หมวกราก → **แบ่งเซลล์** (เซลล์เล็ก) → **ยืดตัว** (เซลล์ยาว) → **เปลี่ยนสภาพ** (มีขนราก)');
reg('secondary-growth', 'Primary → secondary growth', SecondaryGrowth);

// ---------------------------------------------------------- plant 5.3
reg('deficiency', 'อาการขาดธาตุ', DeficiencyExplorer);

// ---------------------------------------------------------- plant 5.4
reg('water-potential', 'เซลล์ในสารละลาย (Ψw)', WaterPotential);
reg('psi-tree', 'Ψ จากดินสู่อากาศ', PsiTree);
reg('transpiration', 'ปัจจัยการคายน้ำ', Transpiration);
reg('pressure-flow', 'Pressure-flow model', PressureFlow);

// ---------------------------------------------------------- plant 5.5
reg('phytochrome', 'Phytochrome Pr ⇄ Pfr', Phytochrome);
reg('auxin-bending', 'ออกซินกับการเบน', AuxinBending);
reg('auxin-dose', 'ออกซิน: ราก vs ยอด', AuxinDose);
reg('auxin-cytokinin', 'auxin : cytokinin', AuxinCytokinin);

// ---------------------------------------------------------- animal 5.1–5.2
reg('epithelium', 'ประกอบเนื้อเยื่อบุผิว', EpitheliumBuilder);
reg('exchange-surface', 'ผิวต่อปริมาตร', ExchangeSurface);

// ---------------------------------------------------------- animal 5.3
explorer('gi-map', 'gi-tract', 'ระบบทางเดินอาหารของคน', 'แยก "ท่อทางเดินอาหาร" (ปาก → ทวารหนัก) ออกจาก "อวัยวะช่วยย่อย" (ต่อมน้ำลาย ตับ ถุงน้ำดี ตับอ่อน) — อาหารไม่ได้ผ่านอวัยวะช่วยย่อยโดยตรง');
reg('swallowing', 'การกลืน 4 ขั้น', Swallowing);
reg('tract-types', 'ทางเดินอาหารสัตว์ต่าง ๆ', TractTypes);
reg('food-journey', 'ตามอาหารไปทีละจุด', FoodJourney);

// ---------------------------------------------------------- animal 5.4
reg('vertebrate-hearts', 'หัวใจสัตว์มีกระดูกสันหลัง', VertebrateHearts);
explorer('heart-map', 'heart', 'หัวใจคน', 'ห้อง**บน**รับเลือดเข้า ห้อง**ล่าง**ปั๊มออก · สีน้ำเงิน = O₂ ต่ำ (ซีกขวาของหัวใจ = ซ้ายมือเรา) · สีแดง = O₂ สูง · ลิ้นสีเหลือง = AV valve, สีเขียว = semilunar valve');
reg('heart-path', 'เส้นทางเลือดผ่านหัวใจ', HeartPath);
reg('cardiac-output', 'Cardiac output', CardiacOutput);
reg('cardiac-cycle', 'วัฏจักรหัวใจ', CardiacCycle);
reg('vessel-flow', 'หลอดเลือด: พื้นที่ ความเร็ว ความดัน', VesselFlow);
reg('capillary-exchange', 'การแลกเปลี่ยนที่หลอดเลือดฝอย', CapillaryExchange);

// ---------------------------------------------------------- animal 5.5
reg('countercurrent', 'Countercurrent ที่เหงือก', Countercurrent);
explorer('resp-map', 'resp-tract', 'ทางเดินหายใจของคน', 'ไล่ตามทางเดินของอากาศ: จมูก → คอหอย → กล่องเสียง → หลอดลม → หลอดลมใหญ่ → หลอดลมฝอย → **ถุงลม (ที่แลกเปลี่ยนแก๊ส)** · กะบังลมอยู่ใต้ปอด');
reg('bird-airsacs', 'ถุงลมของนก', BirdAirSacs);
reg('breathing', 'กลไกการหายใจ', Breathing);
reg('partial-pressure', 'ความดันย่อย O₂/CO₂', PartialPressure);

// ---------------------------------------------------------- animal 5.6
reg('feedback-loop', 'วงจรควบคุมสมดุล', FeedbackLoop);
explorer('neuron-map', 'neuron', 'เซลล์ประสาท', 'สัญญาณเดินทาง**ทางเดียว**: dendrite (รับ) → cell body → axon → synaptic terminal (ส่งต่อด้วยสารสื่อประสาท) · ไมอีลินหุ้มเป็นช่วง ๆ คั่นด้วย node of Ranvier');
reg('reflex-arc', 'Reflex arc', ReflexArc);
explorer('glands-map', 'glands', 'ต่อมไร้ท่อ 9 ต่อม', 'นับให้ครบ 9 ต่อม: hypothalamus, pineal, pituitary, thyroid, parathyroid, thymus, adrenal, pancreas, gonads · ต่อมที่ทำงาน**ตรงข้ามกัน**: thyroid (calcitonin) vs parathyroid (PTH)');
reg('glucose-sim', 'ควบคุมกลูโคสในเลือด', GlucoseSim);

// ---------------------------------------------------------- animal 5.7
reg('n-waste', 'ของเสียไนโตรเจน 3 แบบ', NitrogenWaste);
reg('nephron-path', 'ตาม filtrate ผ่านหน่วยไต', NephronPath);
reg('kidney-control', 'ADH และ RAAS', KidneyControl);

// ---------------------------------------------------------- Unit 6 ecology
reg('biome-explorer', 'ชีวนิเวศบนบก', BiomeExplorer);
reg('quadrat-sampler', 'ประมาณประชากรด้วย quadrat', QuadratSampler);
reg('mark-recapture', 'Mark–recapture', MarkRecapture);
reg('growth-curves', 'กราฟ J vs S', GrowthCurves);
reg('demography', 'Survivorship และพีระมิดอายุ', Demography);
reg('interaction-finder', 'ความสัมพันธ์ +/0/−', InteractionFinder);
reg('succession', 'การแทนที่ทางนิเวศ', Succession);
reg('energy-pyramid', 'พีระมิดพลังงานและสารพิษ', EnergyPyramid);
reg('extinction-rates', 'อัตราการสูญพันธุ์', ExtinctionRates);

// ---------------------------------------------------------- Unit 7 museum
reg('fundamental-questions', 'คำถามพื้นฐาน 4 ข้อ', FundamentalQuestions);
reg('specimen-label', 'อ่านป้ายตัวอย่าง', SpecimenLabel);
reg('hominin-dna', 'DNA โบราณ (Pääbo)', HomininDNA);
reg('cabinet-to-data', 'จากตู้สู่งานวิจัย', CabinetToData);
