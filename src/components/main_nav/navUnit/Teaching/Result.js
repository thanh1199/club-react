

import clsx from 'clsx'
import teaching from '../../../../css/mainUnit/Teaching.module.scss'

import DifficulityChart from './DifficulityChart'
import QualificationChart from './QualificationChart'

function Result ({ mode, data = "" }) {
    if (data !== "") {
        const dataAray = data.split(" ")
        const [teacher, subject, season] = dataAray
        return (
            <div id={clsx(teaching.result)} className={clsx(teaching[`result_${mode}`])}>
                {/* 
                Part1: {subject, teacher}
                Part2: {
                    Part2a: {difficulty, text, qualification}
                    Part2b: chart
                }
                Part3: subjectContent (何について、グループワーク有無、試験形式)
                Part4: comment} 
                */}
                <div id={clsx(teaching.part1)}>
                    <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.subject)}>
                        <span>科目名</span>
                        <span>{subject + " (" + season + ")"}</span>
                    </div>
                    <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.teacher)}>
                        <span>担当先生</span>
                        <span>{teacher}</span>
                    </div>
                </div>
                <div id={clsx(teaching.part2)}>
                    <div id={clsx(teaching.part2a)}>
                        <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.difficulty)}>
                            <span>難易度</span>
                            <span><DifficulityChart mode={mode}/></span>
                        </div>
                        <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.text)}>
                            <span>テキスト</span>
                            <span>XXYYXXTT</span>
                        </div>
                        <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.qualification)}>
                            <span>関連資格</span>
                            <span>MOS WORD expecialist</span>
                        </div>
                    </div>
                    <div id={clsx(teaching.part2b)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                        <span>成績割合</span>
                        <span style={{margin: "20px 0 0", padding: "unset"}}><QualificationChart mode={mode}/></span>
                    </div>
                </div>
                <div id={clsx(teaching.part3)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                    <span>内容</span>
                    <p>This is Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint sed laudantium quod tempore quibusdam nam magnam esse tenetur voluptates, ad aut quam? Perferendis quos veniam fugiat eos consequatur blanditiis.</p>
                </div>
                <div id={clsx(teaching.part4)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                    <span>Comments</span>
                    <div className={clsx(teaching.commentUnit)}>
                        <span className={clsx(teaching.stdName)}>2019年 後期 (可)</span>
                        <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。</p>
                    </div>
                    <div className={clsx(teaching.commentUnit)}>
                        <span className={clsx(teaching.stdName)}>2020年 後期 (可)</span>
                        <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora hic dolores deserunt voluptatibus illum neque, deleniti praesentium, veritatis impedit ipsa nam ducimus officiis. Doloremque doloribus ducimus fugit sapiente tempore!</p>
                    </div>
                    <div className={clsx(teaching.commentUnit)}>
                        <span className={clsx(teaching.stdName)}>2021年 後期 (可)</span>
                        <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt eligendi ratione corrupti facilis tempora, perferendis quo nam quos debitis, ad asperiores eius facere perspiciatis nihil in nisi. Voluptas, amet!</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={clsx(teaching.result)} className={clsx(teaching[`result_${mode}`])}>
            {/* 
            Part1: {subject, teacher}
            Part2: {
                Part2a: {difficulty, text, qualification}
                Part2b: chart
            }
            Part3: subjectContent (何について、グループワーク有無、試験形式)
            Part4: comment} 
            */}
            <div id={clsx(teaching.part1)}>
                <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.subject)}>
                    <span>科目名</span>
                    <span>AABBCC (後期 2単位)</span>
                </div>
                <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.teacher)}>
                    <span>担当先生</span>
                    <span>平川先生</span>
                </div>
            </div>
            <div id={clsx(teaching.part2)}>
                <div id={clsx(teaching.part2a)}>
                    <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.difficulty)}>
                        <span>難易度</span>
                        <span><DifficulityChart mode={mode}/></span>
                    </div>
                    <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.text)}>
                        <span>テキスト</span>
                        <span>XXYYXXTT</span>
                    </div>
                    <div className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])} id={clsx(teaching.qualification)}>
                        <span>関連資格</span>
                        <span>MOS WORD expecialist</span>
                    </div>
                </div>
                <div id={clsx(teaching.part2b)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                    <span>成績割合</span>
                    <span style={{margin: "20px 0 0", padding: "unset"}}><QualificationChart mode={mode}/></span>
                </div>
            </div>
            <div id={clsx(teaching.part3)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                <span>内容</span>
                <p>This is Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint sed laudantium quod tempore quibusdam nam magnam esse tenetur voluptates, ad aut quam? Perferendis quos veniam fugiat eos consequatur blanditiis.</p>
            </div>
            <div id={clsx(teaching.part4)} className={clsx(teaching.partUnit, teaching[`partUnit_${mode}`])}>
                <span>Comments</span>
                <div className={clsx(teaching.commentUnit)}>
                    <span className={clsx(teaching.stdName)}>2019年 後期 (可)</span>
                    <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。</p>
                </div>
                <div className={clsx(teaching.commentUnit)}>
                    <span className={clsx(teaching.stdName)}>2020年 後期 (可)</span>
                    <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempora hic dolores deserunt voluptatibus illum neque, deleniti praesentium, veritatis impedit ipsa nam ducimus officiis. Doloremque doloribus ducimus fugit sapiente tempore!</p>
                </div>
                <div className={clsx(teaching.commentUnit)}>
                    <span className={clsx(teaching.stdName)}>2021年 後期 (可)</span>
                    <p className={clsx(teaching.stdComment)}>この科目は役に立ちました。Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum incidunt eligendi ratione corrupti facilis tempora, perferendis quo nam quos debitis, ad asperiores eius facere perspiciatis nihil in nisi. Voluptas, amet!</p>
                </div>
            </div>
        </div>
    )
}

export default Result