import React from 'react';
import './style.css';
function AlgoInfo({algoInfo}) {
	return (
        <div className="SortInfo">
            <hr />
            <h1>{algoInfo.title ? algoInfo.title : 'Select Algorithm'}</h1>

            <div className="SortInfo__Body">
                <article className="SortInfo__Article">
                    {algoInfo.description ? (
                        algoInfo.description
                    ) : (
                            <p>
                                You must select an algorithm before you can visualize it's
                                execution on an array of numbers.
                            </p>
                        )}
                </article>

                <aside className="SortInfo__Aside">
                    <h3>Performance</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Worst-case time complexity</td>
                                <td>
                                    <code>{algoInfo.worstCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Average time complexity</td>
                                <td>
                                    <code>{algoInfo.avgCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Best-case time complexity</td>
                                <td>
                                    <code>{algoInfo.bestCase}</code>
                                </td>
                            </tr>

                            <tr>
                                <td>Worst-case space complexity</td>
                                <td>
                                    <code>{algoInfo.space}</code>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </aside>
            </div>
        </div>
		)
}
export default AlgoInfo;