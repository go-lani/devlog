'use client';

import { dateKit } from '@lani.ground/kits';
import { useModal } from '@lani.ground/react-modal';
import '@lani.ground/react-modal/css';
import { useState } from 'react';

import Syntax from '@/components/detail/SyntaxHighlighter';

import ContentLayout from '../common/ContentLayout';
import ExampleSection from '../common/ExampleSection';
import CustomPickerModal from '../components/picker/CustomPickerModal';

export default function CustomPickerPage() {
  const { formatDate } = dateKit;
  const { open } = useModal();

  // Custom Picker
  const customState = useState<[Date | null, Date | null]>([null, null]);
  const [range] = customState;

  const MODAL_NAMES = {
    CUSTOM_PICKER: 'custom-picker',
  };

  const openCustomPicker = () => {
    open({
      name: MODAL_NAMES.CUSTOM_PICKER,
      component: (closeModal) => (
        <CustomPickerModal rangeState={customState} closeModal={closeModal} />
      ),
      animation: {
        className: 'sample',
        duration: 300,
      },
      centerMode: true,
    });
  };

  const examples = [
    {
      title: 'Custom Picker',
      description:
        'Calendar와 TimePicker를 조합한 커스텀 picker 예시입니다. 모달 형태로 제공되며 날짜와 시간 범위를 함께 선택할 수 있습니다.',
      icon: '🎨',
      color: 'from-violet-500 to-indigo-500',
      bgColor: 'bg-violet-500/5',
      borderColor: 'border-violet-500/20',
      onToggle: openCustomPicker,
      range,
      customState,
      placeholder: '날짜 범위를 선택하세요',
    },
  ];

  return (
    <ContentLayout packageName="react-picker">
      <ExampleSection title="Custom Picker 구성 컴포넌트 Props 및 Preview">
        <div className="mb-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 sm:rounded-xl sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-base font-bold leading-tight text-transparent sm:text-lg">
                Calendar Props
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Name
                      </th>
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Type
                      </th>
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Required
                      </th>
                      <th className="py-2 text-left font-medium text-gray-300">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        type
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        &apos;date&apos; | &apos;range&apos;
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">
                        달력 타입 (기본값: &apos;date&apos;)
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        date
                      </td>
                      <td className="py-2 pr-4 font-mono">Date | null</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">선택된 날짜 (단일 날짜 모드)</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        onDateChange
                      </td>
                      <td className="py-2 pr-4 font-mono">{`(date: Date | null) => void`}</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">날짜 변경 콜백 (단일 날짜 모드)</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        range
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        [Date | null, Date | null]
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">선택된 날짜 범위 (범위 모드)</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        onRangeChange
                      </td>
                      <td className="py-2 pr-4 font-mono">{`(range: [Date | null, Date | null]) => void`}</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">범위 변경 콜백 (범위 모드)</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        calendarType
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        &apos;default&apos; | &apos;multiple&apos; |
                        &apos;scroll&apos;
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">
                        달력 표시 형태 (기본값: &apos;default&apos;)
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        minDate
                      </td>
                      <td className="py-2 pr-4 font-mono">Date</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">선택 가능한 최소 날짜</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        maxDate
                      </td>
                      <td className="py-2 pr-4 font-mono">Date</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">선택 가능한 최대 날짜</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        weekDays
                      </td>
                      <td className="py-2 pr-4 font-mono">string[]</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">
                        요일 표시 형태 (기본값: [&apos;일&apos;, &apos;월&apos;,
                        &apos;화&apos;, &apos;수&apos;, &apos;목&apos;,
                        &apos;금&apos;, &apos;토&apos;])
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        weekendColor
                      </td>
                      <td className="py-2 pr-4 font-mono">string</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">주말 날짜 색상</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        holidayColor
                      </td>
                      <td className="py-2 pr-4 font-mono">string</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">휴일 날짜 색상</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        holidays
                      </td>
                      <td className="py-2 pr-4 font-mono">Date[]</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">휴일 날짜 목록</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        quickSelectOptions
                      </td>
                      <td className="py-2 pr-4 font-mono">{`{ label: string; days: number }[]`}</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">빠른 선택 옵션 목록</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        enableReset
                      </td>
                      <td className="py-2 pr-4 font-mono">boolean</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">범위 초기화 버튼 표시 여부</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-emerald-400">
                        className
                      </td>
                      <td className="py-2 pr-4 font-mono">string</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">추가 CSS 클래스명</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4 sm:rounded-xl sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-base font-bold leading-tight text-transparent sm:text-lg">
                TimePicker Props
              </h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Name
                      </th>
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Type
                      </th>
                      <th className="py-2 pr-4 text-left font-medium text-gray-300">
                        Required
                      </th>
                      <th className="py-2 text-left font-medium text-gray-300">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-400">
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        value
                      </td>
                      <td className="py-2 pr-4 font-mono">Date | null</td>
                      <td className="py-2 pr-4 text-red-400">Required</td>
                      <td className="py-2">선택된 시간</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        onChange
                      </td>
                      <td className="py-2 pr-4 font-mono">{`(value: Date | null) => void`}</td>
                      <td className="py-2 pr-4 text-red-400">Required</td>
                      <td className="py-2">시간 변경 콜백</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        isOpen
                      </td>
                      <td className="py-2 pr-4 font-mono">boolean</td>
                      <td className="py-2 pr-4 text-red-400">Required</td>
                      <td className="py-2">시간 선택기 열림/닫힘 상태</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        onOpenChange
                      </td>
                      <td className="py-2 pr-4 font-mono">{`(isOpen: boolean) => void`}</td>
                      <td className="py-2 pr-4 text-red-400">Required</td>
                      <td className="py-2">
                        시간 선택기 열림/닫힘 상태 변경 콜백
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        mode
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        &apos;default&apos; | &apos;panel&apos;
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">
                        시간 선택기 모드 (기본값: &apos;default&apos;)
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        timeUnits
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        (&apos;hour&apos; | &apos;minute&apos; |
                        &apos;second&apos; | &apos;ampm&apos;)[]
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">
                        표시할 시간 단위 (기본값: [&apos;hour&apos;,
                        &apos;minute&apos;, &apos;second&apos;])
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        enableSnap
                      </td>
                      <td className="py-2 pr-4 font-mono">boolean</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">스냅 기능 활성화 여부</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        minuteStep
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        1 | 5 | 10 | 15 | 30
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">분 단위 스텝 (기본값: 1)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        secondStep
                      </td>
                      <td className="py-2 pr-4 font-mono">
                        1 | 5 | 10 | 15 | 30
                      </td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">초 단위 스텝 (기본값: 1)</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        disabled
                      </td>
                      <td className="py-2 pr-4 font-mono">boolean</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">비활성화 여부 (기본값: false)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-purple-400">
                        className
                      </td>
                      <td className="py-2 pr-4 font-mono">string</td>
                      <td className="py-2 pr-4 text-gray-500">Optional</td>
                      <td className="py-2">추가 CSS 클래스명</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-purple-500/20 bg-purple-500/5 p-4 sm:rounded-xl sm:p-6">
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-base font-bold leading-tight text-transparent sm:text-lg">
                Usage
              </h3>
              <div className="mt-3 w-full">
                <Syntax
                  language="tsx"
                  children={`import { dateKit } from '@lani.ground/kits';
import { Calendar, TimePicker } from '@lani.ground/react-picker';
import '@lani.ground/react-picker/styles/Calendar.css';


const { formatDate } = dateKit;
const [range, setRange] = useState<[Date | null, Date | null]>(range);
const [timePickerOpen, setTimePickerOpen] = useState(false);
const [editingDateType, setEditingDateType] = useState<'start' | 'end' | null>(null);

const handleTimePickerOpen = (type: 'start' | 'end') => {
  setEditingDateType(type);
  setTimePickerOpen(true);
};

const handleTimeChange = (value: Date | null) => {
  const updatedRange = {
    start: [value, localRange[1]] as [Date | null, Date | null],
    end: [localRange[0], value] as [Date | null, Date | null],
  };

  if (editingDateType && updatedRange[editingDateType]) {
    setLocalRange(updatedRange[editingDateType]);
  }
};

const getCurrentTimeValue = () => {
  const valueMap = {
    start: localRange[0],
    end: localRange[1],
  };

  return editingDateType ? valueMap[editingDateType] : null;
};

<div>
  <Calendar
    type="range"
    range={range}
    onRangeChange={(newRange: [Date | null, Date | null]) => {
      setRange(newRange);
    }}
    calendarType="scroll"
    weekendColor="#6B8EFF"
    holidayColor="#FF8B8B"
    quickSelectOptions={[
      { label: '7일', days: 7 },
      { label: '14일', days: 14 },
      { label: '28일', days: 28 },
    ]}
    enableReset
  />

  <div>
    <p>시작 날짜</p>
    {range[0] ? (
      <>
        <p>
          {formatDate(range[0], 'MM월 DD일')}
        </p>
        <button
          type="button"
          onClick={() => handleTimePickerOpen('start')}
        >
          {formatDate(range[0], 'HH시 mm분')}
        </button>
      </>
    ) : (
      <p>날짜를 선택해주세요</p>
    )}
  </div>
  <div>
    <p>종료 날짜</p>
    {range[1] ? (
      <>
        <p>{formatDate(range[1], 'MM월 DD일')}</p>
        <button
          type="button"
          onClick={() => handleTimePickerOpen('end')}
        >
          {formatDate(range[1], 'HH시 mm분')}
        </button>
      </>
    ) : (
      <p>날짜를 선택해주세요</p>
    )}
  </div>

  <TimePicker
    mode="panel"
    value={getCurrentTimeValue()}
    onChange={handleTimeChange}
    isOpen={timePickerOpen}
    timeUnits={['hour', 'minute']}
    onOpenChange={setTimePickerOpen}
    enableSnap
  />
</div>`}
                  isPlayground
                />
              </div>
            </div>
          </div>
        </div>
      </ExampleSection>
      <ExampleSection title="Custom Picker Examples">
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-1 lg:gap-8">
          {examples.map((example) => (
            <div
              key={example.title}
              className={`rounded-lg border sm:rounded-xl ${example.borderColor} ${example.bgColor} p-4 transition-all duration-300 hover:shadow-lg sm:p-6`}
            >
              {/* 헤더 */}
              <div className="mb-3 flex items-start gap-2 sm:mb-4 sm:items-center sm:gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-800/50 text-lg sm:h-10 sm:w-10 sm:text-xl">
                  {example.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`bg-gradient-to-r text-base font-bold sm:text-lg ${example.color} bg-clip-text leading-tight text-transparent`}
                  >
                    {example.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {example.description}
                  </p>
                </div>
              </div>

              {/* 인터랙션 영역 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  <span className="flex-shrink-0 text-xs font-medium text-gray-300 sm:text-sm">
                    선택된 범위:
                  </span>
                  <button
                    type="button"
                    onClick={example.onToggle}
                    className={`cursor-pointer rounded-lg border ${example.borderColor} w-full min-w-0 bg-neutral-800/30 px-3 py-2 text-center text-xs transition-all duration-200 hover:border-opacity-60 hover:bg-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-neutral-900 sm:w-auto sm:min-w-[250px] sm:text-left sm:text-sm`}
                  >
                    <span className="block truncate">
                      {example.range[0] && example.range[1]
                        ? `${formatDate(
                            example.range[0],
                            'YYYY-MM-DD HH:mm',
                          )} ~ ${formatDate(
                            example.range[1],
                            'YYYY-MM-DD HH:mm',
                          )}`
                        : example.placeholder}
                    </span>
                  </button>
                </div>

                {/* 모달은 useModal 훅으로 관리됩니다 */}

                {/* 기능 설명 */}
                <div className="mt-3 rounded-lg bg-neutral-800/30 p-3 sm:mt-4 sm:p-4">
                  <h4 className="mb-2 text-xs font-medium text-gray-300 sm:text-sm">
                    주요 기능
                  </h4>
                  <ul className="space-y-1 text-xs text-gray-400">
                    <li className="flex items-center gap-2">
                      <div
                        className={`h-1 w-1 rounded-full bg-gradient-to-r sm:h-1.5 sm:w-1.5 ${example.color} flex-shrink-0`}
                      />
                      <span className="leading-relaxed">
                        Calendar + TimePicker 조합
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className={`h-1 w-1 rounded-full bg-gradient-to-r sm:h-1.5 sm:w-1.5 ${example.color} flex-shrink-0`}
                      />
                      <span className="leading-relaxed">모달 형태의 UI</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className={`h-1 w-1 rounded-full bg-gradient-to-r sm:h-1.5 sm:w-1.5 ${example.color} flex-shrink-0`}
                      />
                      <span className="leading-relaxed">
                        날짜 + 시간 범위 선택
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className={`h-1 w-1 rounded-full bg-gradient-to-r sm:h-1.5 sm:w-1.5 ${example.color} flex-shrink-0`}
                      />
                      <span className="leading-relaxed">
                        커스텀 UI 구성 예제
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div
                        className={`h-1 w-1 rounded-full bg-gradient-to-r sm:h-1.5 sm:w-1.5 ${example.color} flex-shrink-0`}
                      />
                      <span className="leading-relaxed">애니메이션 효과</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ExampleSection>
    </ContentLayout>
  );
}
